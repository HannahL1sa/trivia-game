/*
import React, { useState, useEffect } from 'react';
import questions from '.data/questions.json';
import axios from 'axios';


function Quiz({ handleScore }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questions, setQuestions] = useState([]);

  const getQuestions = () => {
    axios.get('data.json')
      .then(response => {
        //console.log(response.data); // Log the response data
        setQuestions(response.data); // Update the state with the response data
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getQuestions();
  }, []);

  console.log(questions); // This will log the current value of questions whenever it changes

  const handleAnswer = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const checkAnswer = () => {
    const currentQuestion = questions[questionIndex];
    const correctAnswer = currentQuestion.answer;
    if (selectedAnswer === correctAnswer) {
      setIsCorrect(true);
      handleScore(1); // add 1 point for correct answer
    } else {
      setIsCorrect(false);
    }
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedAnswer("");
      setIsAnswered(false);
      setIsCorrect(false);
    } else {
      setQuestionIndex(0);
      setSelectedAnswer("");
      setIsAnswered(false);
      setIsCorrect(false);
    }
  };

  const currentQuestion = questions[questionIndex];

  return (
    <div>
      <h1>Question {questionIndex + 1}</h1>
      <h2>{currentQuestion.question}</h2>
      <form>
        {currentQuestion.choices.map((choice, index) => (
          <div key={index}>
            <input
              type="radio"
              id={choice}
              name="answer"
              value={choice}
              checked={selectedAnswer === choice}
              onChange={handleAnswer}
            />
            <label htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </form>
      {isAnswered && (
        <div>
          {isCorrect ? <p>Correct!</p> : <p>Incorrect!</p>}
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
      {!isAnswered && (
        <div>
          <button onClick={checkAnswer}>Submit Answer</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz({ handleScore }) {

  // Initialize state variables using useState hook
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [questions, setQuestions] = useState([]);

  // Fetch quiz questions from data.json file
  const getQuestions = () => {
    axios.get('data.json')
      .then(response => {
        setQuestions(response.data); // Set questions state to response data
      })
      .catch(error => {
        console.log(error);
      });
  };

  // Call getQuestions function on mount
  useEffect(() => {
    getQuestions();
  }, []);

  // Log questions state for debugging purposes
  console.log(questions);

  // Update selectedAnswer state when user selects an answer
  const handleAnswer = (event) => {
    setSelectedAnswer(event.target.value);
  };

 
}

export default Quiz;

