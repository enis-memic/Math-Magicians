import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Functionality = () => {
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
      <div className="calculator">
        <div className="screen">{state.next || state.total || '0'}</div>
        <div className="row first-row">
          <input value="AC" type="button" onClick={() => calcClick('AC')} />
          <input value="+/-" type="button" onClick={() => calcClick('+/-')} />
          <input value="%" type="button" onClick={() => calcClick('%')} />
          <input
            value="÷"
            type="button"
            className="color"
            onClick={() => calcClick('÷')}
          />
        </div>
        <div className="row second-row">
          <input value="7" type="button" onClick={() => calcClick('7')} />
          <input value="8" type="button" onClick={() => calcClick('8')} />
          <input value="9" type="button" onClick={() => calcClick('9')} />
          <input
            value="x"
            type="button"
            className="color"
            onClick={() => calcClick('x')}
          />
        </div>
        <div className="row third-row">
          <input value="4" type="button" onClick={() => calcClick('4')} />
          <input value="5" type="button" onClick={() => calcClick('5')} />
          <input value="6" type="button" onClick={() => calcClick('6')} />
          <input
            value="-"
            type="button"
            className="color"
            onClick={() => calcClick('-')}
          />
        </div>
        <div className="row fourth-row">
          <input value="1" type="button" onClick={() => calcClick('1')} />
          <input value="2" type="button" onClick={() => calcClick('2')} />
          <input value="3" type="button" onClick={() => calcClick('3')} />
          <input
            value="+"
            type="button"
            className="color"
            onClick={() => calcClick('+')}
          />
        </div>
        <div className="row fifth-row">
          <input
            value="0"
            type="button"
            className="expand"
            onClick={() => calcClick('0')}
          />
          <input value="." type="button" onClick={() => calcClick('.')} />
          <input
            value="="
            type="button"
            className="color"
            onClick={() => calcClick('=')}
          />
        </div>
      </div>
    </div>
  );
};
export default Functionality;
