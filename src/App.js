import React, { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState('');

  const appendValue = (value) => {
    setResult(result + value);
  };

  const calculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  const clearResult = () => {
    setResult('');
  };

  return (
    <div className="calculator">
    <h1>Calculator</h1>
      <input type="text" value={result} readOnly />
      <div className="keypad">
        <button onClick={() => clearResult()}>C</button>
        <button onClick={() => appendValue('.')}>.</button>
        <button onClick={() => calculate('=')}>=</button>
        <button onClick={() => appendValue('/')}>/</button>
        <button onClick={() => appendValue('7')}>7</button>
        <button onClick={() => appendValue('8')}>8</button>
        <button onClick={() => appendValue('9')}>9</button>
        <button onClick={() => appendValue('*')}>*</button>
        <button onClick={() => appendValue('4')}>4</button>
        <button onClick={() => appendValue('5')}>5</button>
        <button onClick={() => appendValue('6')}>6</button>
        <button onClick={() => appendValue('-')}>-</button>
        <button onClick={() => appendValue('1')}>1</button>
        <button onClick={() => appendValue('2')}>2</button>
        <button onClick={() => appendValue('3')}>3</button>
        <button onClick={() => appendValue('+')}>+</button>
        <button onClick={() => appendValue('0')}>0</button>
      </div>
    </div>
  );
}

export default App;
