import React from 'react';
import './style.css';

const QuizMain = ({ handleAnswer, data: {question, correct_answer, answers}}) => {
  return (
    <>
        <div className='questionClass'>
            <h1 dangerouslySetInnerHTML={{__html:question}}></h1>
        </div>

        <div className='button-overall'>
            {answers.map((answer, idx) => {
                return(
                    <button className='normal-button' onClick ={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html:answer}}></button>
                )
            })}
        </div>

    </>
  )
}

export default QuizMain;
