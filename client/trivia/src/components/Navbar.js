import React from "react";
import Login from "./Login";

function Navbar(props){

    return(
        <div className="navbar">
            <button onClick={() => props.setPage("/")}>Home</button>
            <button onClick={() => props.setPage("/quiz")}>Play the Trivia</button>
            <button onClick={() => props.setPage("/addQuestion")}>Add question</button>
            <button onClick={() => props.setPage("/login")}>Login</button>
            <button onClick={() => props.setPage("/registration")}>Registration</button>
            <button onClick={() => props.setPage("/admin")} hidden={props.hideAdmin}>Admin site</button>
        </div>
    )
}

export default Navbar