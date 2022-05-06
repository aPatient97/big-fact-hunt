import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function HighscoresButton() {
  const navigate = useNavigate();
  return (
      <button onClick={() => navigate('/leaderboard')} className="neon-button">High Scores</button>
  )
}

export default HighscoresButton
