import react from "react";
import { useEffect, useState } from "react";

function Home() {
  const baseURL = "https://api.api-ninjas.com/v1/trivia?limit=30";
  const [trivia, setTrivia] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        baseURL,
        {
          method: "GET",
          headers: { "X-Api-Key": "pe8bDjzt2qs1AeJNbzukUw==sXVqA6FU8t4IBEFG" },
          contentType: "application/json",
        });
    const result = await response.json()
    
    setTrivia(result)
}
fetchData()
}, []);

console.log(trivia)
  return (
    <div className="quiz">
        {trivia.map((data) => {
            return (<>
            <p>{data.category}</p>
            <p>{data.question}</p>
            <p>{data.answer}</p>
            </>)
        })}
    </div>
  )
}
export default Home