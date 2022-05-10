import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

function JoinButton() {
  const navigate = useNavigate();
  return (
      <button onClick={() => navigate('/join')}className="neon-button">Join Quiz</button>
  )
}

export default JoinButton
