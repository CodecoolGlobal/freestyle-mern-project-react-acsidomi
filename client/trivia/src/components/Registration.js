import { useState, useEffect } from "react";

function Registration(props) {

    async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const userData = { username, email, password }
        try {
            const response = await fetch("http://localhost:4000/api/quiz/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            alert("User registered!")
            event.target.username.value="";
            event.target.email.value = "";
            event.target.password.value= "";
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="registration">
            <form className="registrationForm" onSubmit={handleSubmit} >
                <label>
                    Username:
                </label>
                <input type="text"
                    name="username"
                >
                </input>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                ></input>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                ></input>
                <button type="submit">Register</button>
            </form>
            <button type="button" onClick={() => props.setPage("/")}>Cancel</button>
        </div>
    )

}

export default Registration
