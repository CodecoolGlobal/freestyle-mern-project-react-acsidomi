import react from "react";
import {useState, useEffect} from "react";


function AdminSite(){
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

    const [questions, setQuestions] = useState([])


    async function handleChange(event) {
        const selectedCategory = event.target.value;
        if (selectedCategory) {
            try {
                const url = `http://localhost:4000/api/quiz/${selectedCategory}`;
                const resp = await fetch(url);
                if (resp.ok) {
                const questionsOfCategoryFetch = await resp.json();
                setQuestions(questionsOfCategoryFetch);
                } else {
                console.error("Error fetching category data:", resp.statusText);
                }
            } catch (error) {
                console.error("Error fetching category data:", error);
            }
            }
        }
    
    async function handleDelete(id){
        try {
            const resp = await fetch(`http://localhost:4000/api/quiz/admin/delete/${id}`,{
                method: "DELETE"
            })
            if(!resp.ok){
                throw new Error("Network response was not ok");
            }
            
            setQuestions((prev) =>prev.filter((question) => question._id !== id)) 
        } catch (error) {
            console.error(error)
        }
    }
    
    

    return(
        <div className="admin-site">
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
        {questions && questions.map(question =>{
            return (<div key={question._id} className="admin-category">
            <p>{question.question}</p>
            <p>{question.answer}</p>
            <button >Edit question</button>
            <button onClick={() => handleDelete(question._id)}>Delete question</button>
            </div>
            )
            
            
        })}
        </div>
    )

}
















export default AdminSite