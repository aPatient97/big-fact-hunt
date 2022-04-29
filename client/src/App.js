// Needed to access the socket on port 5001
import { io } from 'socket.io-client';
import React , {useState, useEffect} from 'react';
import './App.css';
const socket = io('http://localhost:5001/');
// const participantCount = io.engine.clientsCount;

function App() {
  const [clientNum, setClientNum] = useState('');
  // uses admin-message on page render
  useEffect(() => {
    socket.on('admin-message', (msg) => {
      // log the data that was sent from the socket to the terminal.
      console.log(msg)
    });
    socket.on('client-number', (num) => {
      // log the data that was sent from the socket to the terminal.
      setClientNum(num);
    });
  }, []);
  
  return (
    <>
      <h1>Hello all you fact hunts </h1>
      <p>{clientNum}</p>
    </>
  );
}

export default App;
