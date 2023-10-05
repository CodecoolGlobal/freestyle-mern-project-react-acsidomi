import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Quiz from './components/Quiz.js';
import {useState, useEffect} from "react";
import AddQuestion from './components/AddQuestion.js';
import Login from "./components/Login.js"
import AdminSite from './components/AdminSite';

function App() {
  const [showQuiz, setShowQuiz] = useState(false)
  const [showAddQuestion, setShowAddQuestion] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [hideAdmin, setHideAdmin] = useState(true)
  const [showAdminSite, setShowAdminSite] = useState(false)
  return (
    <div className="App">
      <Navbar setShowQuiz={setShowQuiz} setShowAddQuestion={setShowAddQuestion} setShowLogin={setShowLogin} hideAdmin={hideAdmin} setShowAdminSite={setShowAdminSite}/>
      {showQuiz ? <Quiz/> : showAddQuestion ? <AddQuestion/>  : showLogin ? <Login setHideAdmin={setHideAdmin}/> : showAdminSite ? <AdminSite /> : <Home />}
      
    </div>
  );
}

export default App;
