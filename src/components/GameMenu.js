import React from "react";

function GameMenu({ handleGameState }) {
  return (
    <div>
      <h1>Jamaican Trivia</h1>
      <button onClick={() => handleGameState("quiz")}>Start Game</button>
    </div>
  );
}

export default GameMenu;
