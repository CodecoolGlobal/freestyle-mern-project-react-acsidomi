import react from "react";
import { useState, useEffect } from "react";


function Login(props){

    const [loginSuccess, setLoginSuccess] = useState(false)
    const [invalidLogin, setInvalidLogin] = useState(false)
    const [user, setUser] = useState("")


    async function fetchUsers(username){
        try {
            const resp = await fetch(`http://localhost:4000/api/quiz/login/${username}`)
            if(resp.ok){
                const userData = await resp.json();
                return userData
            } else{
                    console.error("Error fetching user:", resp.statusText)
                }
        } catch (error) {
            console.error("Error fetching user:",error)
            
        }
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const userData = await fetchUsers(event.target.username.value)

        if (userData && userData.password === event.target.password.value && userData.userName === event.target.username.value) {
            if (userData.userName === "admin") {
                props.setHideAdmin(false)
            }
            setLoginSuccess(true)
            setInvalidLogin(false)
            setUser(userData.userName)
        } else {
            setInvalidLogin(true)
            console.log("Invalid password or username")
        }

    }

    return (
        <div className="login">
        { invalidLogin ? 
        <>
            <p>Invalid username or password. Try again!</p>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Username"></input>
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
        </>
        : !loginSuccess ?
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" name="username" placeholder="Username"></input>
                <label>Password:</label>
                <input type="password" name="password" placeholder="Password"></input>
                <button type="submit">Login</button>
            </form>
            : <p>Logged in as {user}</p>
    }
    </div>

    )

}

export default Login