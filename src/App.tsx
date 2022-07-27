import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WAI from './pages/WhoAmI';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Home />
      <WAI />
      <Footer />
    </div>
  );
}

export default App;
