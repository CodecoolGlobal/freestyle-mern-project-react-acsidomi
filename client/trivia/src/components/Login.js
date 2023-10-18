import react from "react";
import { useState, useEffect } from "react";
import bcrypt from "bcryptjs";



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
        const hashedPassword = userData.password
        const givenPassword = event.target.password.value
        if (userData && bcrypt.compareSync(givenPassword, hashedPassword) && userData.userName === event.target.username.value) {
            if (userData.userName === "admin") {
                props.setHideAdmin(false)
            }
            setLoginSuccess(true)
            setInvalidLogin(false)
            setUser(userData)
            props.hideButtons(true)
            props.setHideLogout(false)
            props.setPage("/profile")
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
                <label>Username:</label> <br></br>
                <input type="text" name="username" placeholder="Username"></input> <br></br>
                <label>Password:</label> <br></br>
                <input type="password" name="password" placeholder="Password"></input> <br></br>
                <button type="submit">Login</button>
            </form>
        </>
        : !loginSuccess ?
            <form onSubmit={handleSubmit}>
                <label>Username:</label> <br></br> 
                <input type="text" name="username" placeholder="Username"></input> <br></br>
                <label>Password:</label> <br></br>
                <input type="password" name="password" placeholder="Password"></input> <br></br>
                <button type="submit">Login</button>
            </form>
            : <>
            <p>Logged in as {user.username}</p>
            </>
            
    }
    </div>

    )

}

export default Login