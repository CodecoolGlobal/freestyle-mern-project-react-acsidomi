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
    const [editedQuestion, setEditedQuestion] = useState(null)
    const [editSite, setEditSite] = useState(false)


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

    async function handleSave(event){
        event.preventDefault()
        const selectedEdit = {...editedQuestion}
        selectedEdit.question = event.target.editQuestion.value 
        selectedEdit.answer = event.target.editAnswer.value
        try {
            const resp = await fetch(`http://localhost:4000/api/quiz/admin/edit/${selectedEdit._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(selectedEdit)
                
            })
            if (!resp.ok) {
                throw new Error("Network response was not ok");
            }
            setQuestions(prev =>
                prev.map(question => (question._id === selectedEdit._id ? selectedEdit : question)))
            setEditSite(false)
            setEditedQuestion(null)

        } catch (error) {
            console.error(error)
        }
    }

    function handleEdit(selectedQuestion) {
        setEditSite(true)
        setEditedQuestion(selectedQuestion)
        console.log(selectedQuestion)
    }

    function handleBack() {
        setEditSite(false)
    }
    
    

    return(
        <div className="admin-site">
        
        {editSite ? <>
            <div className="selected-questions">
                <p>{editedQuestion.question}</p>
                <p>{editedQuestion.answer}</p>
            </div>

        <div className="editForm">
            <form onSubmit={handleSave}>
            <label>Question: </label>
            <input type="text" name="editQuestion" placeholder="Edit question"></input><br></br>
            <label>Answer: </label>
            <input type="text" name="editAnswer" placeholder="Edit answer"></input><br></br>
            <button type="submit">Save changes</button>
            </form>
        </div>
        <button onClick={handleBack}>Back</button>
        </>
        :
        <>
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
        {questions.map(question =>{
            return (<div key={question._id} className="admin-category">
            <p>{question.question}</p>
            <p>{question.answer}</p>
            <button onClick={() => handleEdit(question)} >Edit question</button>
            <button onClick={() => handleDelete(question._id)}>Delete question</button>
            </div>
            )
            
            
        })}
        </>}
        </div>
    )

}
















export default AdminSite