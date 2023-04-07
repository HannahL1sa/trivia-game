import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('data.json');
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      console.log("Answer is correct!");
      setScore(score + 1);
    }
  };
  
  

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <div className="quiz-container">
      {questions.length > 0 && currentQuestion < questions.length ? (
        <div className="question-container">
          <h2>Question {currentQuestion + 1}</h2>
          <h3 className="question">{questions[currentQuestion].question}</h3>
          <div className="choices">
            {questions[currentQuestion].choices.map((choice, index) => (
              <button key={index} onClick={() => handleAnswer(choice)}>
                {choice}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next Question</button>
          <p className="score">Score: {score}</p>
        </div>
      ) : (
        <div className="result-container">
          <h2>Your score is {score}</h2>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
