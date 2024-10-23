import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operator, setOperator] = useState("");
    const [display, setDisplay] = useState("0");

    const numberClick = (number) => {
        if (operator === "") {
            setNum1(num1 + number);
            setDisplay(num1 + number);
        } else {
            setNum2(num2 + number);
            setDisplay(num1 + operator + (num2 + number));
        }
    };

    const operatorClick = (op) => {
        setOperator(op);
        setDisplay(num1 + op);
    };

    const allClear = () => {
        setDisplay("0");
        setNum1("");
        setNum2("");
        setOperator("");
    };

    const handleEquals = () => {
        let result;
        switch (operator) {
            case "+":
                result = parseFloat(num1) + parseFloat(num2);
                break;
            case "-":
                result = parseFloat(num1) - parseFloat(num2);
                break;
            case "*":
                result = parseFloat(num1) * parseFloat(num2);
                break;
            case "/":
                result = parseFloat(num1) / parseFloat(num2);
                break;
            default:
                return;
        }
        setDisplay(result);
        setNum1(result);
        setNum2("");
        setOperator("");
    };

    const handleDelete = () => {
        if (operator === "") {
            setNum1(num1.slice(0, -1));
            setDisplay(num1.slice(0, -1));
        } else {
            setNum2(num2.slice(0, -1));
            setDisplay(num1 + operator + num2.slice(0, -1));
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleEquals();
        } else if (e.key === "Escape") {
            allClear();
        } else if (e.key === "Backspace") {
            handleDelete();
        } else if (["+","-","*","/"].includes(e.key)) {
            operatorClick(e.key);
        } else if (e.key >= '0' && e.key <= '9') {
            numberClick(e.key);
        }
    };

    return (
        <div className="calculator-container" onKeyDown={handleKeyDown} tabIndex="0">
            <div className="screen">
                <div className="result">{display}</div>
            </div>
            <div className="buttons">
                <button className="item clear" onClick={allClear}>c</button>
                <button className="item delete" onClick={handleDelete}>⭠</button>
                <button className="item operator" onClick={() => operatorClick("/")}>/</button>
                <button className="item number" onClick={() => numberClick("7")}>7</button>
                <button className="item number" onClick={() => numberClick("8")}>8</button>
                <button className="item number" onClick={() => numberClick("9")}>9</button>
                <button className="item operator" onClick={() => operatorClick("*")}>*</button>
                <button className="item number" onClick={() => numberClick("4")}>4</button>
                <button className="item number" onClick={() => numberClick("5")}>5</button>
                <button className="item number" onClick={() => numberClick("6")}>6</button>
                <button className="item operator" onClick={() => operatorClick("-")}>-</button>
                <button className="item number" onClick={() => numberClick("1")}>1</button>
                <button className="item number" onClick={() => numberClick("2")}>2</button>
                <button className="item number" onClick={() => numberClick("3")}>3</button>
                <button className="item operator" onClick={() => operatorClick("+")}>+</button>
                <button className="item number" onClick={() => numberClick(".")}>.</button>
                <button className="item number" onClick={() => numberClick("0")}>0</button>
                <button className="item equals" onClick={handleEquals}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
