import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function MultiplayerScores({socket, score}) {
    const { user_data } = useSelector((state) => state);
    // const [ scoreLog, setScoreLog ] = useState(['']);
    // const [ load, setLoad ] = useState(false);

    useEffect(() => {
        if (user_data){
            console.log(score)
            socket.emit('end-quiz', score)

            // setLoad(true)
            
            // // Started Lobby leaderboard integration:
            // const interval = setInterval(() => {
            //     socket.on('end-quiz', scoreData => {
            //         let logMsg = `${scoreData.username} scored ${scoreData.score} points`;
            //         if(scoreLog[scoreLog.length - 1] !== logMsg){setScoreLog(prevState => [...prevState, logMsg])}
            //     });
            // }, 2000);
            
            // return () => clearInterval(interval);
            
            // socket.emit('score-log', scoreLog);
            // socket.on('score-log', logs => {
            //     setScoreLog(logs)
            // })
        }
    }, [])

    // useEffect(() => {
    //     if (user_data){
    //         // socket.emit('end-quiz', score);
    //         console.log(score)
    //         socket.on('end-quiz', scoreData => {
    //             let logMsg = `${scoreData.username} scored ${scoreData.score} points`;
    //             setScoreLog(prevState => [...prevState, logMsg])
    //         });      
    //     }
    // }, [load])
    
    // const renderFinalScores = () => {
    //     return scoreLog.map((log) => 
    //         <article>{log}</article>
    //     )
    // }

  return (
    // <div>{renderFinalScores()}</div>
    <></>
  )
}

export default MultiplayerScores
