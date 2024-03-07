import './App.css';
import About from './components/About';
import NavBar from './components/NavBar';
import { useState } from 'react';
import TextForm from './components/TextForm';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#20243B";
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Router>
        <NavBar tittle="First Web" about="about Web" mode={mode} togglemode={togglemode}/>
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<TextForm tittle1="Enter the text here to analyze below"  mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
