import React from 'react';
import Calculator from './components/Calculator';
import './App.css';
import Quote from './components/Quotes';

const App = () => (
  <div className="App">
    <div className="quote-cont">
      <Quote />
    </div>
    <div className="calculator-cont">
      <Calculator />
    </div>
  </div>
);

export default App;
