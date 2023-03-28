import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quotes';
import Home from './components/Home';
import Navigation from './components/Navigation';

const App = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
