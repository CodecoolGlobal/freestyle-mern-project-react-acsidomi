import { useState, useEffect } from "react";

function Leaderboard() {
    const [usersWithScore, setUsersWithScore] = useState([])

    useEffect(() => {
        async function fetchData() {
            try {
                const resp = await fetch("http://localhost:4000/api/quiz/users/leaderboard")
                if (resp.ok) {
                    const usersData = await resp.json()
                    setUsersWithScore(usersData)
                }

            } catch (error) {
                console.error(error)
                alert("Cannot load data!")
            }
        }
        fetchData()
    }, [])

    return (
        <div className="leaderboard">
            <h1>The Trivia Leaderboard:</h1>
            <br/>
            {
                usersWithScore.map((userMap,index) => {
                    return <div key={userMap._id} className="leaderboard-user">
                        <h2>{index+1}.</h2>
                        <br/>
                        <p>Name: {userMap.user.userName}</p>
                        <p>Final Score: {userMap.score}</p>
                        <br/>
                    </div>

                })
            }

        </div>
    )

}

export default Leaderboard