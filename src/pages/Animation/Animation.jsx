import React, { useState, useEffect } from 'react';
import './Animation.css';

import basketball from '../../../public/img/basketball.png';
import football from '../../../public/img/football.png';
import cartoon from '../../../public/img/cartoon.jpg';
import human from '../../../public/img/human.png';
import volleyball from '../../../public/img/volleyball.png';
import logo from '../../../public/img/logo.png';





const App = () => {
  // Constants
  const fieldWidth = 700;
  const fieldHeight = 400;
  const diameter = 100;
  const maxLeft = fieldWidth - diameter;
  const maxTop = fieldHeight - diameter;
  const vx = 5;
  const vy = 5;
  const rotationSpeed = 5; // Degrees per frame

  // State variables
  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState('none');

  const calculatePosition = () => {
    let newX = x;
    let newY = y;
    let newGoRight = goRight;
    let newGoDown = goDown;
    let newRotation = rotation;

    if (goRight) {
      newX += vx;
      if (newX >= maxLeft) {
        newGoRight = false;
        newRotation += 180;
      }
    } else {
      newX -= vx;
      if (newX <= 0) {
        newGoRight = true;
        newRotation += 180;
      }
    }

    if (goDown) {
      newY += vy;
      if (newY >= maxTop) {
        newGoDown = false;
        newRotation += 180;
      }
    } else {
      newY -= vy;
      if (newY <= 0) {
        newGoDown = true;
        newRotation += 180;
      }
    }

    setX(newX);
    setY(newY);
    setGoRight(newGoRight);
    setGoDown(newGoDown);
    setRotation(newRotation);
  };

  const runClick = () => {
    setRunning(!running);
  };

  const changeBallImage = (image) => {
    setBackgroundImage(`url(${image})`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculatePosition();
        setRotation((prevRotation) => prevRotation + rotationSpeed);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [running, x, y, rotation, goRight, goDown]);

  return (
    <div id="container">
      <div id="field">
        <div
          id="ball"
          style={{
            left: `${x}px`,
            top: `${y}px`,
            transform: `rotate(${rotation}deg)`,
            backgroundImage: backgroundImage,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>

      <div id="control">
        <button className={`btn ${running ? 'btn-warning' : 'btn-success'}`} onClick={runClick}>
          <span className={`bi ${running ? 'bi-pause' : 'bi-play'}`}>&nbsp;{running ? 'PAUSE' : 'RUN'}</span>
        </button>
        <button className="btn btn-primary" onClick={() => changeBallImage('none')}>NONE</button>
        <button className="btn btn-primary" onClick={() => changeBallImage(basketball)}>Basketball</button>
        <button className="btn btn-primary" onClick={() => changeBallImage(football)}>Football</button>
        <button className="btn btn-primary" onClick={() => changeBallImage(volleyball)}>Volleyball</button>
        <button className="btn btn-primary" onClick={() => changeBallImage(human)}>Human</button>
        <button className="btn btn-primary" onClick={() => changeBallImage(cartoon)}>Cartoon</button>
        <button className="btn btn-primary" onClick={() => changeBallImage(logo)}>Logo</button>
      </div>
    </div>
  );
};

export default App;
