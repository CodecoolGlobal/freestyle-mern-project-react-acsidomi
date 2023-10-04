import react from "react";
import {useState, useEffect} from "react";

function AddQuestion(){

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
      ]

   async function handleSubmit(event){
        event.preventDefault()
        const category = event.target.category.value
        const question = event.target.question.value
        const answer = event.target.answer.value
        const data = {category, question, answer}
        try{
            const response = await fetch("http://localhost:4000/api/quiz/addNew", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        const newData = await response.json()
        console.log(newData)
        }
        catch(err){ 
            console.error("Error fetching category data:", err);
        }
    }
    
    return(
        <div className="newForm">
    <form onSubmit={handleSubmit}>
        <label htmlFor="question">Question:</label>
        <input type="text" name="question" id="question" placeholder="Type question" />

        <label htmlFor="answer">Answer:</label>
        <input type="text" name="answer" id="answer" placeholder="Type answer" />

        <label htmlFor="category">Category:</label>
        <select name="category" id="category">
            <option>Select category</option>
            {categories.map((category, index) => (
                <option key={categories2[index]} value={categories2[index]}>
                    {category}
                </option>
            ))}
        </select>
        
        <button type="submit">Add new question</button>
    </form>
</div>

    )
}

export default AddQuestion