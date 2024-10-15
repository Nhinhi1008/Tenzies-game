
import { useState } from 'react';

import "./App.css";

const Die = ({ value }: { value: number }) => {
  const renderDots = () => {
    switch (value) {
      case 1:
        return <div className="dot middle"></div>;
      
      case 2:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      
      case 3: 
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot middle"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      
      case 4:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
        
      case 5:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot middle"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      
      case 6:
        return (
          <>
            <div className="dot top-left"></div>
            <div className="dot top-right"></div>
            <div className="dot middle-left"></div>
            <div className="dot middle-right"></div>
            <div className="dot bottom-left"></div>
            <div className="dot bottom-right"></div>
          </>
        );
      
      default:
        return null;

    }
  }

  return (
    <div className={`die face-${value}`}>
      <div className="dot-container">{renderDots()}</div>
    </div>
  );
};



export default function App() {

  // const diceShow = [1, 2, 3, 4, 5, 6, 2, 4, 6, 1];
  const [diceShow, setDice] = useState(Array(10).fill(1));
  const [rollCount, setRollCount] = useState(0);

  const rollDice = () => {
    const newDice = diceShow.map(() => Math.floor(Math.random() * 6) + 1);
    setDice(newDice); setRollCount(rollCount + 1); 
  };



  return (
    <div>
      <div className="container">
        <div className="tenzies-game">
          <div className="title">Tenzies</div>

          <div className="heading-text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</div>
          
          <div className="menu">
            <div className="line">
              <div className="line-menu">
                <h3>Current Rolls:</h3>
                <p>{rollCount}</p>
              </div>

              <div className="line-menu">
                <h3>Best Rolls:</h3>
                <p>--</p>
              </div>
            </div>
            <div className="line">
              <div className="line-menu">
                <h3>Current Time:</h3>
                <p>--</p>
              </div>

              <div className="line-menu">
                <h3>Best Time:</h3>
                <p>--</p>
              </div>
            </div>

          </div>

          <div className="dice-container">
            {diceShow.map((value, index) => (
              <Die key={index} value={value} />
            ))}
          </div>

          <button onClick= {rollDice}>Roll Dice</button>

        </div>
      </div>
    </div>
  )
}


