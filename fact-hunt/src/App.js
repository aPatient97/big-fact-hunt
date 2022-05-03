import './App.css';
import Navbar from './layout/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import NotFound from './pages/NotFound';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/quiz" element={<QuizPage />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App;
