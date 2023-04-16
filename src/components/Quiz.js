import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quiz.css';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

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

  useEffect(() => {
    // Update the comment and score on the screen when they change
  }, [comment, score]);


  const handleAnswer = (answer) => {
    let comment = "";
    if (answer === questions[currentQuestion].choices[questions[currentQuestion].answer]) {
      console.log("Answer is correct!");
      comment = "Correct! ";
      setScore(score + 1);
    } else {
      console.log("Answer is incorrect.");
      comment = "Incorrect. ";
    }
    setComment((prevComment) => prevComment + comment);
  };
  
  

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setComment("")
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setComment("");
  };

  return (
    <div className="question-container">
      {questions.length > 0 && currentQuestion < questions.length ? (
        <>
          <h2>Question {currentQuestion + 1}</h2>
          <h3 className="question">{questions[currentQuestion].question}</h3>
          <div className="choices">
            {questions[currentQuestion].choices.map((choice, index) => (
              <button key={index} onClick={() => handleAnswer(choice)}>
                {choice}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion}>Next</button>
          <p className="comment">{comment}</p>
        </>
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
