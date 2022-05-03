import React from 'react'
import { useNavigate } from 'react-router-dom'

const Lobby = () => {

  const navigate = useNavigate();

  return (
    <>  
        <div>
            Lobby
        </div>
        <div>   
            {/* users displayed */}
        </div>    
        <div>
            <button onClick={() => navigate('/quiz')}>Start Quiz</button>
        </div>
    </>
  )
}

export default Lobby;
