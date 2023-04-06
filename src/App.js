import './App.css';
import GameMenu from './components/GameMenu';
import Quiz from './components/Quiz';
import Score from './components/Score';
import React, {useState} from 'react';
/*import questions from '../public/data/questions.json';*/


function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  const handleScore = (newScore) => {
    setScore(score + newScore);
  };

  const handleGameState = (newGameState) => {
    setGameState(newGameState);
  };

  let currentView;

  if (gameState === "menu") {
    currentView = <GameMenu handleGameState={handleGameState} />;
  } else if (gameState === "quiz") {
    currentView = <Quiz handleScore={handleScore} />;
  } else if (gameState === "scores") {
    currentView = <Score />;
  }

  return (
    <div className="App">
      {currentView}
    </div>
  );
}

export default App;

