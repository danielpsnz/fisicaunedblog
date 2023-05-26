import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Home from "./layouts/Home/Home";
import Footer from "./components/Footer";

import Matematicas from './layouts/Matematicas';
import Fisica from './layouts/Fisica';
import About from './layouts/About';
import Guia from './layouts/Guia';

import B from './layouts/Blog/B';
import EL1 from './layouts/Blog/EL1';
import EL2 from './layouts/Blog/EL2';
import FF1 from './layouts/Blog/FF1';
import FF2 from './layouts/Blog/FF2';
import FF3 from './layouts/Blog/FF3';
import MC from './layouts/Blog/MC';
import Q from './layouts/Blog/Q';
import TCYE from './layouts/Blog/TCYE';
import TE1 from './layouts/Blog/TE1';
import TE2 from './layouts/Blog/TE2';
import VYO from './layouts/Blog/VYO';
import MYC from './layouts/Blog/MYC';

import './App.css';

import {Route, Routes} from "react-router-dom";

function App() {
  const [theme, setTheme] = useState('dark');

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
        <div className='App'>
          {theme === 'dark' && (
          <link rel="stylesheet" type="text/css" href="./dark-mode.css" />
          )}
          <Navbar onUpdateTheme={onUpdateTheme} theme={theme}/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/matematicas' element={<Matematicas />} />
            <Route path='/fisica' element={<Fisica />} />
            <Route path='/blog' element={<Guia />} />
            <Route path='/me' element={<About />} />

            <Route path='/FF1' element={<FF1 />} />
            <Route path='/Q' element={<Q />} />
            <Route path='/B' element={<B />} />
            <Route path='/FF2' element={<FF2 />} />
            <Route path='/TE1' element={<TE1 />} />
            <Route path='/FF3' element={<FF3 />} />
            <Route path='/EL1' element={<EL1 />} />
            <Route path='/MC' element={<MC />} />
            <Route path='/VYO' element={<VYO />} />
            <Route path='/EL2' element={<EL2 />} />
            <Route path='/TE2' element={<TE2 />} />
            <Route path='/TCYE' element={<TCYE />} />
            <Route path='/MYC' element={<MYC />} />
          </Routes>   
          <Footer />
        </div>
  );
}

export default App;
