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
        <table className='leaderboard'>
            <thead className='leaderboard-info'>
                <tr>
                    <th id="rank-head">Rank</th>
                    <th id="user-head">Username</th>
                    <th id="score-head">Score</th>
                </tr>
            </thead>

            <tbody>
                {leaderboardData && leaderboardData.map((data, i) => (
                        <tr key={i} className='leaderboard-item'>
                            <td className="rank">{i+1}</td>
                            <td className="username">{data.username}</td>
                            <td className="score">{data.score}</td>
                        </tr>    
                ))}
           </tbody> 
        </table>
    </div>
  )
}

export default Leaderboard;
