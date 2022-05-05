import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleQuizUrl, handleStart } from '../../redux/actions';
import './style.css';
import Rules from '../../components/Rules';

const Lobby = ({socket}) => {
  const { change_url, user_data } = useSelector((state) => state);
  const [logs, setLogs] = useState(['']);
  const [ message, setMessage ] = useState(['']);
  const [ chatInput, setChatInput ] = useState('');
  const [ quizStart, setQuizStart ] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    socket.on('join-room', (msg) => {
      setLogs(prevState => [...prevState, msg]);
      console.log(msg);
    })

    setMessage(prevState => [...prevState, 'Welcome to the chat!']);
  }, []);

  useEffect(() => {

    if(!change_url){
      socket.on('room-url', url => {
        console.log(url);
        setQuizStart(true);
        dispatch(handleQuizUrl(url))
      })
    }

  }, [quizStart]);

  const renderLogs = () => {
    return logs.map((log) => 
    <article>
      {log}
    </article>
    )
  }

  const renderMsg = () => {
    return message.map((msg) => 
    <article>
      {msg}
    </article>
    )
  }

  const sendMessage = () => {
    let msg = chatInput;
    let userMsg = `You: ${msg}`;
    setMessage(prevState => [...prevState, userMsg ]);
    socket.emit('new-msg', (msg) )
    socket.on('new-msg', (msg) => {
      setMessage(prevState => [...prevState, msg]);
      console.log(msg);
    });
    setChatInput('');
  };

  const startQuiz = () => {
    socket.emit('start-quiz');
    socket.on('start-quiz', msg => {
      console.log(msg);
      setLogs(prevState => [...prevState, msg])
    });
    if(change_url){
      socket.emit('room-url', change_url)
    } 
    setQuizStart(true);

    navigate('/quiz');
  };

  return (
    <>   
     <span id='lobby-h1'><h1>Lobby</h1></span>
     <Rules />
      <div className="flex-center">   
            <button id={quizStart || user_data.creator ? 'start-btn' : 'hide'} onClick={startQuiz}>Start Quiz</button>
            {/* <form onSubmit={e => e.preventDefault()} > */}
              <div id="flex-column">
                <label htmlFor="chat">Chat</label>
                <input type="text" name="chat" id="chat" placeholder="Say something nice..." autoComplete="off" value={chatInput} onChange={ e => setChatInput(e.target.value)} ></input>
              </div>
              <button onClick={sendMessage} type='submit' id="chat-btn">Chat</button>
            {/* </form> */}
      </div>
      <div id="chat-log-container">
        <div id="room-log">
            <h3>Room log</h3> 
            <div>{renderLogs()}</div>
        </div>
        <div id="room-chat">   
            <h3>Room chat</h3>
            <div>{renderMsg()}</div>
        </div>
      </div>
    </>
  )
}

export default Lobby;
