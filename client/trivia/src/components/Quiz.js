
import React from "react";
import { useState, useEffect } from "react";

function Quiz(props) {
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

  const [questionsOfCategory, setQuestionsOfCategory] = useState([]);
  const [showQuestion, setShowQuestion] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [incorrectAnswer, setIncorrectAnswer] = useState(false)
  const [hiddenAnswer, setHiddenAnswer] = useState(true)

  async function handleChange(event) {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
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
        let randomIndex =  Math.round(Math.random()*questionsOfCategory.length)
        if (answeredQuestions.includes(questionsOfCategory[randomIndex]._id)) {
            randomIndex = Math.round(Math.random()*questionsOfCategory.length)
        } else {
            setQuestionIndex(randomIndex)
            setNextQuestion(false)
        }
    }
    function handleAnswer(event) {
        event.preventDefault();
        if (event.target.answer.value.toLowerCase() === questionsOfCategory[questionIndex].answer.toLowerCase()) {
            let answeredQuest = [...answeredQuestions] 
            answeredQuest.push(questionsOfCategory[questionIndex]._id)
            setAnsweredQuestions(answeredQuest)
            setNextQuestion(true);
            return console.log("Correct!");
        } else {
            setIncorrectAnswer(true)
            setNextQuestion(false);
            return console.log("Try again!");
        }
    }

    function handleTryAgain(){
        setQuestionsOfCategory([])
        setShowQuestion(false)
        setNextQuestion(false)
        setAnsweredQuestions([])
        setQuestionIndex(0)
        setIncorrectAnswer(false)
        setHiddenAnswer(true)
    }
    
    function showAnswer() {
        setHiddenAnswer(false)
    }
    
    
    console.log("random question",questionsOfCategory[questionIndex]);
    
    return (
        <div className="categories">
        <label>Select a category: </label>
        <select name="choose" id="choose" onChange={handleChange}>
            <option>Select category</option>
            {categories.map((category, index) => {
            return (
                <option key={categories2[index]} value={categories2[index]}>
                {category}
                </option>
            );
            })}
        </select>
        {!showQuestion ? (
            <button onClick={() => setShowQuestion(true)}>Show question</button>
        ) : !nextQuestion && !incorrectAnswer ? (
            <>
            <p>{questionsOfCategory[questionIndex].question}</p>
            <form onSubmit={handleAnswer}>
                <input
                type="text"
                name="answer"
                placeholder="Type the answer"
                ></input>
                <button type="submit">Send answer</button>
            </form>
            </>
        ) : !nextQuestion && incorrectAnswer ? 
            <>
            <p>{questionsOfCategory[questionIndex].question}</p>
            <p>Incorrect Answer, try again.</p>
            <p hidden={hiddenAnswer}>{questionsOfCategory[questionIndex].answer}</p>
            <button onClick={showAnswer}>Show answer</button>
            <button onClick={handleTryAgain}>Try again</button>
            </>
            : (
            <>
            <button onClick={handleNext}>Next question</button>
            </>
        )}
        </div>
    );
}

export default Quiz;
