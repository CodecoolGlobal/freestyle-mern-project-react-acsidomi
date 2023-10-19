import React from "react";


function Navbar(props){

    function confirm(){

        const confirm =window.confirm("Log out?")
        if(confirm){
            alert("You logged out!")
            localStorage.clear();
        }
    }

    return(
        <div className="navbar">
            <button onClick={() => props.setPage("/")}>Home</button>
            <button onClick={() => props.setPage("/quiz")}>Play the Trivia</button>
            <button onClick={() => props.setPage("/leaderboard")}>Leaderboard</button>
            <button onClick={() => props.setPage("/addQuestion")}>Add question</button>
            <button onClick={() => props.setPage("/login")} hidden={props.hideButtons}>Login</button>
            <button onClick={() => {props.setPage("/registration")}} hidden={props.hideButtons}>Registration</button>
            <button onClick={() => props.setPage("/admin")} hidden={props.hideAdmin}>Admin site</button>
            <button onClick={() => props.setPage("/profile")} hidden={!props.hideButtons}>User profile</button>
            <button onClick={() =>{props.setPage("/"); props.setHideButtons(false); props.setHideLogout(true); confirm()}} hidden={props.hideLogout}>Logout</button>
        </div>
    )
}

export default Navbar