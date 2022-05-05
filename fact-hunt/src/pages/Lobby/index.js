import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rules from '../../components/Rules';
import './style.css'

const Lobby = () => {

  const navigate = useNavigate();

  return (
    <>   
     <span id='lobby-h1'><h1>Lobby</h1></span>
     <Rules />
      <div className="flex-center">   
            <button id='start-btn' onClick={() => navigate('/quiz')}>Start Quiz</button>
            <div id="flex-column">
              <label htmlFor="chat">Chat</label>
              <input type="text" name="chat" id="chat" placeholder="Say something nice..." autocomplete="off"></input>
            </div>
            <button type='submit' id="chat-btn">Chat</button>
      </div>
      <div id="chat-log-container">
        <div id="room-log">
            <h3>Room log</h3> 
            <div>Insert log feed here you fact hunt</div>
        </div>
        <div id="room-chat">   
            <h3>Room chat</h3>
            <div>Insert chat feed here you fact hunt</div>
        </div>
      </div>
    </>
  )
}

export default Lobby;
