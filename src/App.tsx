import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import WAI from './pages/WhoAmI';


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/who-am-i' element={<WAI />} />
      </Routes>
  );
}

export default App;
