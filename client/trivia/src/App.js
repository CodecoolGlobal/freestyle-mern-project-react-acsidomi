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
import UserProfile from './components/UserProfile';

function App() {
  // const [showQuiz, setShowQuiz] = useState(false)
  // const [showAddQuestion, setShowAddQuestion] = useState(false)
  // const [showLogin, setShowLogin] = useState(false)
  const [hideAdmin, setHideAdmin] = useState(true)
  const [hideButtons, setHideButtons] = useState(false)
  const [hideLogout, setHideLogout] = useState(true)
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
        return (<Login setHideAdmin={setHideAdmin} setHideLogout={setHideLogout} setPage={setPage} hideButtons={setHideButtons} />);
      case ("/admin"):
        return (<AdminSite />);
      case ("/registration"): 
        return (<Registration setPage={setPage}/>)
      case ("/profile"):
        return (<UserProfile setPage={setPage}  />)
    }
  }

  return (
    <div className="App">
      <Navbar setPage={setPage} hideAdmin={hideAdmin} hideButtons={hideButtons} hideLogout={hideLogout} setHideButtons={setHideButtons} setHideLogout={setHideLogout}/>
      {renderPage()}
    </div>
  );
}

export default App;
