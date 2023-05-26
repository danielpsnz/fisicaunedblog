import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";

import favicon from './assets/logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('dark')

  const onUpdateTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  return (
      <Router>
        <div className="App">
          <link rel="shortcut icon" type="image/png" href={favicon} />
          {theme === 'dark' && (
            <link rel="stylesheet" type="text/css" href="../static/dark-mode.css" />
          )}
          <Navbar onUpdateTheme={onUpdateTheme} theme={theme}/>
          <Routes>
          </Routes>
          
          <Footer />
        </div>
      </Router>
  );
}

export default App;
