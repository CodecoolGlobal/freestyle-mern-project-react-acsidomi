import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import {useState, useEffect} from "react";

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  return (
    <div className="App">
      <Navbar setShowQuiz={setShowQuiz} showQuiz={showQuiz}/>
      {showQuiz ? <Quiz/> : <Home />}
      
    </div>
  );
}

export default App;
