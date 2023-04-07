import './App.css';
import GameMenu from './components/GameMenu';
import Quiz from './components/Quiz';
import React, {useState} from 'react';


function App() {
  const [gameState, setGameState] = useState("menu");

  const handleGameState = (newGameState) => {
    setGameState(newGameState);
  };

  let currentView;

  if (gameState === "menu") {
    currentView = <GameMenu handleGameState={handleGameState} />;
  } else if (gameState === "quiz") {
    currentView = <Quiz />;
  }

  return (
    <div className="App">
      {currentView}
    </div>
  );
}

export default App;

