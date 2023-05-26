import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navbar from '../components/Navbar';
import Home from "../layouts/Home/Home";
import Footer from "../components/Footer";
import { createContext } from 'react';

import favicon from '../assets/logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes, 
  HashRouter
} from "react-router-dom";

export const AppContext = createContext({});

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
     <HelmetProvider>
    <Router>
    <HashRouter basename="/">
      <div className="App">
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
        {theme === 'dark' && (
          <link rel="stylesheet" type="text/css" href="../static/dark-mode.css" />
        )}
      </Helmet>
        <Navbar onUpdateTheme={onUpdateTheme} theme={theme}/>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
        
        <Footer />
      </div>
      </HashRouter>
    </Router>
    </HelmetProvider>
  );
}

export default App;
