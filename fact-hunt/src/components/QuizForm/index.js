import React, { useEffect, useState } from 'react';
import { handleQuizUrl, handleData} from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css'

const QuizForm = ({socket}) => {
  const [categories, setCategories] = useState({});
  const [roomExists, setRoomExists] = useState(true);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const fetchCategories = async () => {
      const resp = await fetch("https://opentdb.com/api_category.php");
      const data = await resp.json();
      data.trivia_categories.forEach((data) => {
          setCategories((prevState) => ({ ...prevState, [data.id]: data.name }));
      });
  };

  const allCategories = Object.keys(categories).map((c) => {
      return (
        <option key={c} value={c}>
            {categories[c]}
        </option>
      )
  })

  useEffect(() => {
      fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = `https://opentdb.com/api.php?amount=10&category=${e.target.category.value}&difficulty=${e.target.difficulty.value}&type=multiple`

    const data = {roomName: e.target.roomName.value, username: e.target.username.value, creator: true, url:url };

    socket.emit('join-room', data);

    socket.on('room-exists', exists => {
      if (!exists){
        setRoomExists(false)
      } else {
        dispatch(handleQuizUrl(url))
        dispatch(handleData(data))
        navigate('/lobby');
      }
    })

    console.log(e.target.category.value)
    console.log(e.target.difficulty.value)
    console.log(e.target.roomName.value)
    console.log(e.target.username.value)

  }
  
  
  return (
    <>
        <div id="form-container">
            <h2>Choose your quiz settings</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input type="text" placeholder='Enter username' name='username'/>
                <label htmlFor='roomName'>Room Name: </label>
                <input type="text" placeholder='room name' name='roomName'/>
                <label htmlFor='category'>Category: </label>
                <select name="category" >
                    {allCategories}
                </select>

                <label htmlFor='difficulty'>Difficulty Level: </label>
                <select name="difficulty" >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <input type="submit" id="submit-btn"/>
            </form>

            {!roomExists ?  <article id='no-join'>Room can't be created!</article> : null}

        </div>
    </>
  )
}

export default QuizForm;
