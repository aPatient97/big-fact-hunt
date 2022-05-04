import React, { useState, useEffect } from 'react';
import QuizMain from '../QuizMain';
import './style.css';
import { useSelector } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange } from '../../redux/actions';
import Leaderboard from '../../pages/Leaderboard';

// const APIurl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

const QuizData = () => {
    const { type_category, type_difficulty } = useSelector((state) => state)
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0); 
    const [showAnswers, setShowAnswers] = useState(false);
    const [count, setCount] = useState(15)
    
    let APIurl = `https://opentdb.com/api.php?amount=10&category=${type_category}&difficulty=${type_difficulty}&type=multiple`


    useEffect(() => {
        fetch(APIurl)
        .then(response => response.json())
        .then(data => {
          const questions = data.results.map((question) => ({
            ...question,
            answers:[question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
          }))
          setQuestions(questions)

        })
      }, [])

    useEffect(() => {
      const timer =
        count > 0 && setInterval(() => setCount(count - 1), 1000)
      return () => clearInterval(timer)
    }, [count])

      const handleAnswer = (answer) => {
        if (!showAnswers) {
          if (answer === questions[currentIndex].correct_answer) {
            setScore((score+70) + (count*2));
          } 
        }
        setShowAnswers(true);
      }

      const handleNextQuestion = () => {
        setCurrentIndex(currentIndex+1);
        setShowAnswers(false);
        setCount(15)
      }

      const timerFinish = () => {
        if (count === 0 && !showAnswers) {
            setShowAnswers(true)
          }
        } 

      timerFinish()

  return ( questions.length > 0 ? (
    <div className='container'>
      {currentIndex >= questions.length ? (
      <>
      <h1>Quiz Ended. Your score is {score}</h1>
      <Leaderboard />
      </>):

      <>
      <div className='timer'>
        {count}
      </div>
      <p>Score: {score}</p>
      <QuizMain handleAnswer={handleAnswer} showAnswers={showAnswers} count={count} handleNextQuestion={handleNextQuestion} data={questions[currentIndex]}/></>}

    </div>
  ) : <div className='container'>Loading...</div>
    
  );
}

export default QuizData;
