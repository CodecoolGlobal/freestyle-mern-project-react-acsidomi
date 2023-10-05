import React from "react";
import Login from "./Login";

function Navbar(props){

    return(
        <div className="navbar">
            <button onClick={()=> {props.setShowAddQuestion(false); props.setShowQuiz(false); props.setShowLogin(false); props.setShowAdminSite(false)}}>Home</button>
            <button onClick={()=> {props.setShowQuiz(true); props.setShowAddQuestion(false); props.setShowLogin(false); props.setShowAdminSite(false)}}>Play the Trivia</button>
            <button onClick={()=> {props.setShowAddQuestion(true); props.setShowQuiz(false); props.setShowLogin(false); props.setShowAdminSite(false)}}>Add question</button>
            <button onClick={()=> {props.setShowLogin(true); props.setShowQuiz(false); props.setShowAddQuestion(false); props.setShowAdminSite(false)}}>Login</button>
            <button onClick={()=> {props.setShowAdminSite(true); props.setShowLogin(false); props.setShowQuiz(false); props.setShowAddQuestion(false)}} hidden={props.hideAdmin}>Admin site</button>
        </div>
    )
}

export default Navbar