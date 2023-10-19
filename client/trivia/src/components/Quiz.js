import React from "react";
import { useState, useEffect } from "react";

function Quiz() {
  const categories = [
    "Art & Literature",
    "Language",
    "Science & Nature",
    "General",
    "Food & Drink",
    "People & Places",
    "Geography",
    "History & Holidays",
    "Entertainment",
    "Toys & Games",
    "Music",
    "Mathematics",
    "Religion & Mythology",
    "Sport & Leisure",
  ];

  const categories2 = [
    "artliterature",
    "language",
    "sciencenature",
    "general",
    "fooddrink",
    "peopleplaces",
    "geography",
    "historyholidays",
    "entertainment",
    "toysgames",
    "music",
    "mathematics",
    "religionmythology",
    "sportsleisure",
  ];
  const userData = JSON.parse(localStorage.getItem('userInfo'))
  console.log("quiz", userData)
  const [questionsOfCategory, setQuestionsOfCategory] = useState([]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const [hiddenAnswer, setHiddenAnswer] = useState(true);
  const [answerStreak, setAnswerStreak] = useState(0);
  const [select, setSelect] = useState(true);
  const [tryAgain, setTryAgain] = useState(true);

  async function handleChange(event) {
    const selectedCategory = event.target.value;
    setSelect(false);
    if (!selectedCategory) {
      return;
    } else if (selectedCategory) {
      try {
        const url = `http://localhost:4000/api/quiz/${selectedCategory}`;
        const resp = await fetch(url);
        if (resp.ok) {
          const questionsOfCategoryFetch = await resp.json();
          setQuestionsOfCategory(questionsOfCategoryFetch);
        } else {
          console.error("Error fetching category data:", resp.statusText);
        }
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }
  }

  function handleNext() {
    let randomIndex = Math.round(Math.random() * questionsOfCategory.length);
    if (answeredQuestions.includes(questionsOfCategory[randomIndex]._id)) {
      randomIndex = Math.round(Math.random() * questionsOfCategory.length);
    } else {
      setQuestionIndex(randomIndex);
      setNextQuestion(false);
    }
  }

  async function handleAnswer(event) {
    event.preventDefault();
    if (
      event.target.answer.value.toLowerCase() ===
      questionsOfCategory[questionIndex].answer.toLowerCase()
    ) {
      let answeredQuest = [...answeredQuestions];
      answeredQuest.push(questionsOfCategory[questionIndex]._id);
      setAnsweredQuestions(answeredQuest);
      setAnswerStreak(answerStreak + 1);
      setNextQuestion(true);
      return console.log("Correct!");
    } else {
      setIncorrectAnswer(true);
      setNextQuestion(false);
      setTryAgain(false)
      try {
        const resp = await fetch("http://localhost:4000/api/quiz/user/score",{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          score: answerStreak,
          user: userData._id
        })
        })
        if(resp.ok){
          console.log("YAYYY")
          alert(`Your final score is ${answerStreak}`)
        }
      } catch (error) {
        console.error(error)
      }
      return console.log("Try again!");
    }
  }

  function handleTryAgain() {
    setQuestionsOfCategory([]);
    setShowQuestion(false);
    setNextQuestion(false);
    setAnsweredQuestions([]);
    setQuestionIndex(0);
    setIncorrectAnswer(false);
    setHiddenAnswer(true);
    setAnswerStreak(0);
    setTryAgain(true)
    setShowQuestion(false)
    setSelect(true)
    console.log("show quest", showQuestion, "tryagain", tryAgain)
  }

  function showAnswer() {
    setHiddenAnswer(false);
  }

  console.log("random question", questionsOfCategory[questionIndex]);

  return (
    <div className="categories">

      {tryAgain && !showQuestion ? (
        <>
          <label>Select a category: </label> <br></br>
          <select name="choose" id="choose" onChange={handleChange}>
            <option>Select category</option>
            {categories.map((category, index) => {
              return (
                <option key={categories2[index]} value={categories2[index]}>
                  {category}
                </option>
              );
            })}
          </select>{" "}
          <br></br>
          <button id="show" hidden={select} onClick={() => setShowQuestion(true)}>
            Show question
          </button>
        </>
      ) : !nextQuestion && !incorrectAnswer ? (
        <>
          <p>{questionsOfCategory[questionIndex].question}</p>
          <form onSubmit={handleAnswer}>
            <input
              type="text"
              name="answer"
              placeholder="Type the answer"
            ></input>{" "}
            <br></br>
            <button id="send" type="submit">Send answer</button>
          </form>
        </>
      ) : !nextQuestion && incorrectAnswer ? (
        <>
          <p>{questionsOfCategory[questionIndex].question}</p>
          <p className="incorrect-answer-text">Incorrect Answer, try again.</p>
          <p>Final score: {answerStreak}</p>
          <p hidden={hiddenAnswer}>
            {questionsOfCategory[questionIndex].answer}
          </p>
          <button id="answer" onClick={showAnswer}>Show answer</button>
          <button id="again" onClick={handleTryAgain}>Try again</button>
        </>
      ) : (
        <>
          <p className="correct-answer-text">The answer was correct</p>
          <p>Current score: {answerStreak}</p>
          <button id="next" onClick={handleNext}>Next question</button>
        </>
      )}
    </div>
  );
}

export default Quiz;
