import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Calculator() {
  const [firstNumber, setFirst] = useState();
  const [secondNumber, setSecond] = useState();
  const [result, setResult] = useState(0.0);
  const [errorCode, setErrorCode] = useState("");

  const handleChange = (event) => {
    if(event.target.name == "numOne") {
      setFirst(event.target.value)
      setErrorCode(" ");
    }
    if(event.target.name == "numTwo") {
      setSecond(event.target.value)
      setErrorCode(" ");
    }
  }

  const Calculated = (value) => {
    if(parseFloat(value) == value) {
      setFirst(value);
      setResult(value);
      setSecond(" ");
      setErrorCode(" ");
    }
    else {
      console.log("+++++" + parseFloat(secondNumber));
      if(parseFloat(secondNumber) != secondNumber && parseFloat(firstNumber) != firstNumber) {
        setErrorCode("Error: Invalid Value on Both Lines");
        setFirst(" ");
        setSecond(" ");
        return 0;
      }
      if(parseFloat(secondNumber) == secondNumber && parseFloat(firstNumber) != firstNumber) {
        setErrorCode("Error: Invalid Value on First Line");
        setFirst(" ");
        setSecond(" ");
        return 0;
      }
      if(parseFloat(firstNumber) == firstNumber && parseFloat(secondNumber) != secondNumber) {
        setErrorCode("Error: Invalid Value on Second Line");
        setFirst(" ");
        setSecond(" ");
        return 0;
      }
      else {
        setFirst(" ");
        setSecond(" ");
        setResult("UNDEFINED");
      }
    }
  }

  const addVal = (event) => {
    let add = parseFloat(firstNumber) + parseFloat(secondNumber);
    Calculated(add);
  }

  const subVal = (event) => {
    let add = parseFloat(firstNumber) - parseFloat(secondNumber);
    Calculated(add);
  }

  const multVal = (event) => {
    let add = parseFloat(firstNumber) * parseFloat(secondNumber);
    Calculated(add);
  }

  const divVal = (event) => {
    let add = parseFloat(firstNumber) / parseFloat(secondNumber);
    Calculated(add);
  }

  const clearNum = () => {
    setFirst(" ");
    setSecond(" ");
    setResult(0);
  }

  return (
    <>
    <input type="number" name="numOne" value={firstNumber} onChange={handleChange} placeholder="First Number"/>
    <div/>
    <input type="number" name="numTwo" value={secondNumber} onChange={handleChange} placeholder="Second Number"/>
    <form>
      <button type="button" onClick={addVal}>+</button>
      <button type="button" onClick={subVal}>-</button>
      <button type="button" onClick={multVal}>x</button>
      <button type="button" onClick={divVal}>/</button>
      <button type="button" onClick={clearNum}>CLEAR</button>
    </form>
    <p>Previous Result: {result}</p>
    <p>{errorCode}</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Calculator />);