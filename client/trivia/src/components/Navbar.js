import React from "react";


function Navbar(props){

    return(
        <div className="navbar">
            <button>Home</button>
            <button onClick={()=> props.setShowQuiz(!props.showQuiz)}>Categories</button>
            
        </div>
    )
}

export default Navbar