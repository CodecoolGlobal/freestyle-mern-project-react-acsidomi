import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar';
import Quiz from './components/Quiz';
import {useState, useEffect} from "react";
import AddQuestion from './components/AddQuestion';

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showAddQuestion, setShowAddQuestion] = useState(false)
  return (
    <div className="App">
      <Navbar setShowQuiz={setShowQuiz} showQuiz={showQuiz} setShowAddQuestion={setShowAddQuestion} showAddQuestion={showAddQuestion}/>
      {showQuiz ? <Quiz/> : showAddQuestion ?<AddQuestion/>  : <Home />}
      
    </div>
  );
}

export default App;
