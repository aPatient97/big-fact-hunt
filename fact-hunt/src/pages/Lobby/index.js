import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rules from '../../components/Rules';

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
        <Rules />
    </>
  )
}

export default Lobby;
