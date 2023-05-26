import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from "./layouts/Home/Home";
import Footer from "./components/Footer";

import About from './layouts/About';

import favicon from './assets/logo.svg';
import './App.css';

import {Route, Routes} from "react-router-dom";

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
        <div className="App">
          <link rel="shortcut icon" type="image/png" href={favicon} />
          {theme === 'dark' && (
            <link rel="stylesheet" type="text/css" href="../static/dark-mode.css" />
          )}
          <Navbar onUpdateTheme={onUpdateTheme} theme={theme}/>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/me' element={<About />} />
          </Routes>
          
          <Footer />
        </div>
  );
}

export default App;
