import React from 'react';
import './style.css';

const QuizMain = ({ handleAnswer, showAnswers, handleNextQuestion, data: {question, correct_answer, answers }}) => {
  return (
    <> 
    <div id="quiz-container">
        <div className='questionClass'>
            <h2 dangerouslySetInnerHTML={{__html:question}}></h2>
        </div>

        <div className='button-overall'>
            {answers.map((answer, idx) => {
                const specialClassName = showAnswers ? (
                    answer === correct_answer ? "green-button" : "red-button"
                ) : "";
                return(
                    <button className={`normal-button ${specialClassName}`} onClick ={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html:answer}}></button>
                )
            })}
        </div>
        
        {showAnswers && (
            <button onClick={handleNextQuestion} className="next-question">Next Question</button>
        )}
    </div>
            
    </>
  )
}

export default QuizMain;
