import React, { useState } from "react";
import "./app.css";
import MyInput from "./components/MyInput";
import MyButtons from "./components/MyButtons";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("Output here!");

  const handleNum1Change = (value) => setNum1(value);
  const handleNum2Change = (value) => setNum2(value);

  const handleClear = () => {
    setNum1("");
    setNum2("");
    setResult("Output here!");
  };

  const handleCalculation = (operator) => {

    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
      setResult("Invalid Input");
      return;
    }
  
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
  
    let resultValue;
  
    switch (operator) {
      case "+":
        resultValue = number1 + number2;
        break;
      case "-":
        resultValue = number1 - number2;
        break;
      case "x":
        resultValue = number1 * number2;
        break;
      case "/":
        if (number2 !== 0) {
          resultValue = number1 / number2;
        } else {
          setResult("Cannot divide by zero");
          return;
        }
        break;
      default:
        setResult("Invalid Operator");
        return;
    }
  
    setResult(resultValue);
  };
  

  return (
    <div className="w-auto h-[100vh] bg-slate-900 flex justify-center items-center">
      <div className="flex justify-center align-middle flex-wrap bg-white w-72 rounded-lg p-10">
        <MyInput
          place="Number 1"
          value={num1}
          onInputChange={handleNum1Change}
        />
        <MyInput
          place="Number 2"
          value={num2}
          onInputChange={handleNum2Change}
        />
        <div className="flex justify-center align-middle mt-4">
          <MyButtons operator="+" onClick={handleCalculation} />
          <MyButtons operator="-" onClick={handleCalculation} />
          <MyButtons operator="x" onClick={handleCalculation} />
          <MyButtons operator="/" onClick={handleCalculation} />
        </div>
        <span className="max-w-xl overflow-hidden mt-6 py-2 px-4 bg-slate-900 text-white font-bold rounded-lg">
          {result}
        </span>
        <button
          onClick={handleClear}
          className="mt-6 ml-1 py-2 px-4 bg-slate-900 text-white font-bold rounded-lg hover:opacity-90"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
