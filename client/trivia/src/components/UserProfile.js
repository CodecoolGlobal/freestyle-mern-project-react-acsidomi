import { useEffect, useState } from "react";


function UserProfile(props) {
    const userData = JSON.parse(localStorage.getItem('userInfo'))
    const [changePassword, setChangePassword] = useState(true)

    console.log(userData)

    async function handleSubmit(event) {
        event.preventDefault()
        const newPassword = event.target.password.value;
        console.log(newPassword)
        try {
            const resp = await fetch(`http://localhost:4000/api/quiz/user/profile/edit/${userData._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({password:newPassword})
            })
        alert("Changes are saved!")   
        event.target.password.value=""
        setChangePassword(true)
        }
        catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="profile">
            <h1>Welcome, {userData.userName}!</h1>
            <h2>Your profile data:</h2>
            <p>Email: {userData.email}</p>
            <p>Password: <button onClick={() => setChangePassword(!changePassword)}>Change Password</button></p>
            <div hidden={changePassword}>
                <form onSubmit={handleSubmit}>
                    <label>Password:</label>
                    <input type="password"
                        name="password">
                    </input>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default UserProfile