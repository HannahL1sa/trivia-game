import React from "react";
import './GameMenu.css';

function GameMenu({handleGameState}) {
  return (
    <div className="game-menu-container">
      <h1>Jamaican Proverbs Trivia</h1>
      <h2>Welcome to Jamaican Proverbs Trivia! Test your knowledge of Jamaican proverbs with our quiz.</h2>
      <div className="rules">
        <h3>Instructions</h3>
        <p>1. Click the "Start Game" button to begin.</p>
        <p>2. You will be presented with a series of multiple-choice questions.</p>
        <p>3. Choose your answer and click "Next" to move on to the next question.</p>
        <p>4. Once you've answered all the questions, you will see your score.</p>
      </div>
      <button onClick={() => handleGameState("quiz")}>Start Game</button>
    </div>
  );
}

export default GameMenu;
