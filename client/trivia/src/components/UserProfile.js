import { useEffect, useState } from "react";


function UserProfile(props){
    const userData = JSON.parse(localStorage.getItem('userInfo'))

console.log(userData)



    return (
        <h1>HELLLOOO</h1>
    )
}

export default UserProfile