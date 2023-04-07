import React from "react";
import './GameMenu.css';

function GameMenu({handleGameState}) {
  return (
    <div className="game-menu-container">
      <h1>Jamaican Proverbs Trivia</h1>
      <p>Welcome to Jamaican Proverbs Trivia! Test your knowledge of Jamaican culture, history, and cuisine with our quiz.</p>
        <p>Click the "Start Game" button to begin.</p>
        <p>You will be presented with a series of multiple-choice questions.</p>
        <p>Choose your answer and click "Next" to move on to the next question.</p>
        <p>Once you've answered all the questions, you will see your score.</p>
      <button onClick={() => handleGameState("quiz")}>Start Game</button>
    </div>
  );
}

export default GameMenu;
