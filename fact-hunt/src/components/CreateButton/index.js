import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'; 

function CreateButton() {
  const navigate = useNavigate();
  return (
      <button onClick={() => navigate('/create')} className="neon-button">Create quiz</button>
  )
}

export default CreateButton
