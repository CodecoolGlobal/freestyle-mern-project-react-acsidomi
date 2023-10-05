import React from "react";
import Login from "./Login";

function Navbar(props){

    return(
        <div className="navbar">
            <button onClick={()=> {props.setShowAddQuestion(false); props.setShowQuiz(false); props.setShowLogin(false)}}>Home</button>
            <button onClick={()=> {props.setShowQuiz(true); props.setShowAddQuestion(false); props.setShowLogin(false)}}>Play the Trivia</button>
            <button onClick={()=> {props.setShowAddQuestion(true); props.setShowQuiz(false); props.setShowLogin(false)}}>Add question</button>
            <button onClick={()=> {props.setShowLogin(true); props.setShowQuiz(false); props.setShowAddQuestion(false)}}>Login</button>
            <button hidden={props.hideAdmin}>Admin site</button>
        </div>
    )
}

export default Navbar