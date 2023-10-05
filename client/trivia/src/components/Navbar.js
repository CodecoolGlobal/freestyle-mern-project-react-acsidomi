import React from "react";


function Navbar(props){

    return(
        <div className="navbar">
            <button onClick={()=> {props.setShowAddQuestion(false); props.setShowQuiz(false)}}>Home</button>
            <button onClick={()=> {props.setShowQuiz(true); props.setShowAddQuestion(false)}}>Play the Trivia</button>
            <button onClick={()=> {props.setShowAddQuestion(true); props.setShowQuiz(false)}}>Add question</button>
            
        </div>
    )
}

export default Navbar