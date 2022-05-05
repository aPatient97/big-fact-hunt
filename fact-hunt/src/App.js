import './App.css';
import Navbar from './layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import NotFound from './pages/NotFound';
import Leaderboard from './pages/Leaderboard';
import CreateQuiz from './pages/CreateQuiz';
import JoinQuiz from './pages/JoinQuiz';
import Lobby from './pages/Lobby';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('https://lap-3-project.herokuapp.com/');
// const socket = io('http://localhost:5001/'); // Used when running server on local host
function App() {
  useEffect(() => {
    socket.on('admin-message', (msg) => {
      // log the data that was sent from the socket to the terminal.
      console.log(msg)
    });
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/create" element={<CreateQuiz socket={socket}/>}/>
        <Route exact path="/join" element={<JoinQuiz socket={socket}/>}/>
        <Route exact path="/lobby" element={<Lobby socket={socket}/>}/>
        <Route exact path="/quiz" element={<QuizPage/>}/>
        <Route exact path="/leaderboard" element={<Leaderboard />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App;
