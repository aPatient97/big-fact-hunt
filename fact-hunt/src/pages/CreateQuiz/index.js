import React from 'react';
import QuizForm from '../../components/QuizForm';
import './style.css';

const CreateQuiz = ({socket}) => {
  return (
    <div>
        <QuizForm socket={socket} />
    </div>
  )
}

export default CreateQuiz;
