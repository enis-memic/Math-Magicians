import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const calcClick = (buttonName) => {
    const newState = calculate(state, buttonName);
    setState(newState);
  };

  return (
    <div className="main">
      <h2>Let`s do some math!</h2>
      <div className="calculator">
        <div className="screen">{state.next || state.total || '0'}</div>
        <div className="row first-row">
          <Button value="AC" className="btn-reg" calcClick={calcClick} />
          <Button value="+/-" className="btn-reg" calcClick={calcClick} />
          <Button value="%" className="btn-reg" calcClick={calcClick} />
          <Button value="÷" className="btn-reg color" calcClick={calcClick} />
        </div>
        <div className="row second-row">
          <Button value="7" className="btn-reg" calcClick={calcClick} />
          <Button value="8" className="btn-reg" calcClick={calcClick} />
          <Button value="9" className="btn-reg" calcClick={calcClick} />
          <Button value="x" className="btn-reg color" calcClick={calcClick} />
        </div>
        <div className="row third-row">
          <Button value="4" className="btn-reg" calcClick={calcClick} />
          <Button value="5" className="btn-reg" calcClick={calcClick} />
          <Button value="6" className="btn-reg" calcClick={calcClick} />
          <Button value="-" className="btn-reg color" calcClick={calcClick} />
        </div>
        <div className="row fourth-row">
          <Button value="1" className="btn-reg" calcClick={calcClick} />
          <Button value="2" className="btn-reg" calcClick={calcClick} />
          <Button value="3" className="btn-reg" calcClick={calcClick} />
          <Button value="+" className="btn-reg color" calcClick={calcClick} />
        </div>
        <div className="row fifth-row">
          <Button value="0" className="btn-reg expand" calcClick={calcClick} />
          <Button value="." className="btn-reg" calcClick={calcClick} />
          <Button value="=" className="btn-reg color" calcClick={calcClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
