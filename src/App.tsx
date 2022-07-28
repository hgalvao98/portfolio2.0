import React from 'react';
import './App.css';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WID from './pages/WhatIDo';
import WAI from './pages/WhoAmI';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <WAI />
      <Carrousel />
      <WID />
      <Footer />
    </div>
  );
}

export default App;
