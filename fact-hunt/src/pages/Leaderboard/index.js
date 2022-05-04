import React, { useEffect, useState } from 'react';
import './style.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  
  useEffect(() => {
      fetch(`https://lap-3-project.herokuapp.com/users`)
      .then(resp => resp.json())
      .then(data => {
          setLeaderboardData(data)
      })
  }, [])

  return (
    <div id="leaderboard-main">
        <h2 id="leaderboard-title">Leaderboard</h2>
        <div className='leaderboard'>
            <div className='leaderboard-info leaderboard-heading'>
                <p>Rank</p>
                <p>Username</p>
                <p>Score</p>
            </div>
            {leaderboardData && leaderboardData.map((data, i) => (
                <div key={i} className='leaderboard-item'>
                    <p>{i+1}</p>
                    <p>{data.username}</p>
                    <p>{data.score}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Leaderboard;
