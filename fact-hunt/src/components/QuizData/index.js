import React, { useState, useEffect } from 'react';
import QuizMain from '../QuizMain';
import './style.css';
import { useSelector } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange } from '../../redux/actions';

// const APIurl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

const QuizData = () => {
    const { type_category, type_difficulty } = useSelector((state) => state)
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0); 
    const [showAnswers, setShowAnswers] = useState(false);
    const [count, setCount] = useState(5)
    
    let APIurl = `https://opentdb.com/api.php?amount=10&category=${type_category}&difficulty=${type_difficulty}&type=multiple`
    console.log(APIurl)
    console.log(type_category)
    console.log(type_difficulty)

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

    // useEffect(() => {
    //   setTimeout(() => {
    //     setCount((count) => count -1)
    //   }, 1000)
    // })

    useEffect(() => {
      const timer =
        count > 0 && setInterval(() => setCount(count - 1), 1000)
      return () => clearInterval(timer)
    }, [count])

      console.log(count)

      const handleAnswer = (answer) => {
        if (!showAnswers) {
          if (answer === questions[currentIndex].correct_answer) {
            setScore((score+100) + (count*2));
            setShowAnswers(true)
          } else if (count === 0) {
              setShowAnswers(true)
          }
        }
        setShowAnswers(true);
      }

      const handleNextQuestion = () => {
        setCurrentIndex(currentIndex+1);
        setShowAnswers(false);
        setCount(30)
      }


  return ( questions.length > 0 ? (
    <div className='container'>
      {currentIndex >= questions.length ? (
      <h1>Quiz Ended. Your score is {score}</h1>): 
      <QuizMain handleAnswer={handleAnswer} showAnswers={showAnswers} handleNextQuestion={handleNextQuestion} data={questions[currentIndex]}/>}
      <h2>You have {count} seconds left</h2>
    </div>
  ) : <div className='container'>Loading...</div>
    
  );
}

export default QuizData;
