import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Quiz from './components/Quiz.js';
import {useState, useEffect} from "react";
import AddQuestion from './components/AddQuestion.js';
import Login from "./components/Login.js"
import AdminSite from './components/AdminSite';
import Registration from './components/Registration'

function App() {
  // const [showQuiz, setShowQuiz] = useState(false)
  // const [showAddQuestion, setShowAddQuestion] = useState(false)
  // const [showLogin, setShowLogin] = useState(false)
  const [hideAdmin, setHideAdmin] = useState(true)
  // const [showAdminSite, setShowAdminSite] = useState(false)
  const [page, setPage] = useState("/")

  function renderPage() {
    switch(page) {
      case ("/") : 
      return (<Home />);
      case ("/quiz"): 
      return (<Quiz />);
      case ("/addQuestion"):
        return (<AddQuestion />);
      case ("/login"): 
        return (<Login setHideAdmin={setHideAdmin}/>);
      case ("/admin"):
        return (<AdminSite />);
      case ("/registration"): 
        return (<Registration />)
    }
  }

  return (
    <div className="App">
      <Navbar setPage={setPage} hideAdmin={hideAdmin}/>
      {renderPage()}
    </div>
  );
}

export default App;
