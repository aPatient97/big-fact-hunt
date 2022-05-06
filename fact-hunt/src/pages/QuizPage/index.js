import React from 'react'
import QuizData from '../../components/QuizData'

const QuizPage = ({socket}) => {
  return (
    <QuizData socket={socket}/>
  )
}

export default QuizPage
