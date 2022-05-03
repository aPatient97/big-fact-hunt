// Needed to access the socket on port 5001
import { io } from 'socket.io-client';
import React , {useState, useEffect} from 'react';
import './App.css';
// const socket = io('https://lap-3-project.herokuapp.com/');
const socket = io('http://localhost:5001/')
// const participantCount = io.engine.clientsCount
const testData = {
  roomName: 'room1',
  username: 'ikenna98'
};
const testData1 = {
  roomName: 'room2',
  username: 'ikenna98'
};

function App() {
  const [clientNum, setClientNum] = useState('');
  const [joined, setJoined] = useState(['']);
  // uses admin-message on page render
  useEffect(() => {
    socket.on('admin-message', (msg) => {
      // log the data that was sent from the socket to the terminal.
      console.log(msg)
    });
    socket.on('client-number', (num) => {
      // log the number of clients from the socket to the clientNum variable.
      setClientNum(num);
    });
    // socket.emit('join-room', testData);
    // socket.on('join-room', (data) => {
    //   console.log(data);
    // })
  }, []);
  
  const joinBtn = (e) => {
    e.preventDefault();
    const data = {roomName: e.target.roomName.value, username: e.target.username.value};
    socket.emit('join-room', data);
    // socket.emit('disconnect', data);
    socket.on('join-room', (msg) => {
      setJoined(prevState => [...prevState, msg]);
      console.log(msg);
    })
  }

  const renderJoins = () => {
    return joined.map((user) => 
    <article>
      {user}
    </article>
    )
  }

  return (
    <>
      <h1>Hello all you fact hunts </h1>
      <p>{clientNum}</p>
      <form onSubmit={joinBtn} >
        <input type='text' name='username' placeholder='Username here...'/>
        <input type='text' name='roomName' placeholder='Room name here...'/>
        <input type='submit' value='Submit!'/>
      </form>
      {/* <button onClick={joinBtn}>Click Here!</button> */}
      {renderJoins()}
    </>
  );
}

export default App;
