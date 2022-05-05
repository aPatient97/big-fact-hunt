
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleData } from '../../redux/actions';

const JoinQuiz = ({socket}) => {
  const [roomExists, setRoomExists] = useState(true);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {roomName: e.target.roomName.value, username: e.target.username.value, creator: false };
    socket.emit('join-room', data);

    socket.on('room-exists', exists => {
      if (!exists){
        setRoomExists(false)
      } else {
        setRoomExists(true);
        dispatch(handleData(data))
        navigate('/lobby')
      }
    }) 
  }

  return (
    <div>
        <form onSubmit={handleSubmit} >
            <label htmlFor='username'>Enter Username: </label>
            <input type="text" placeholder="Enter username" name="username"/>
            <label htmlFor='roomName'>Room name: </label>
            <input type='text' placeholder='room name' name='roomName'/>
            <input id='join-game-btn' type="submit" value="join game"/>
        </form>
        {!roomExists ?  <article className='no-join'>Room can't be joined!</article> : null}
    </div>
  )
}

export default JoinQuiz;
