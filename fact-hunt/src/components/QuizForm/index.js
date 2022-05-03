import React, { useEffect, useState, useRef } from 'react'
import QuizData from '../QuizData';
import { handleCategoryChange, handleDifficultyChange } from '../../redux/actions';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const QuizForm = () => {
  const [categories, setCategories] = useState({});
  const [url, setUrl] = useState();
  const [category, setCategory] = useState();
  const [difficulty, setDifficulty] = useState("easy");
//   const difficultyRef = useRef();
//   const categoryRef = useRef();
  const dispatch = useDispatch()
  let navigate =useNavigate()
  
//   const handleChange = (e) => {
//       setCategory(e.target.value);
//       dispatch(handleCategoryChange)

  

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
    try {
        // const category = e.target
        // setDifficulty(difficultyRef.current.value)
        // const gameUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
        // setUrl(gameUrl)
        console.log(e.target.value)
        console.log(e.target.category.value)
        console.log(e.target.difficulty.value)
        dispatch(handleCategoryChange(e))
        dispatch(handleDifficultyChange(e))
        navigate('/lobby')
    } catch (err) {
        console.warn(err)
    }

  }
  
  
  return (
    <>
        <div>
            <h2>Choose your quiz settings</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input type="text" placeholder='Enter username' name='username'/>
                <label htmlFor='room-name'>Room Name: </label>
                <input type="text" placeholder='room name' name='room-name'/>
                <label htmlFor='category'>Category: </label>
                <select name="category" onChange={(e) => {setCategory(e.target.value)}}>
                {/* <select name="categoryId"> */}
                    {allCategories}
                </select>

                <label htmlFor='difficulty'>Difficulty Level: </label>
                <select name="difficulty" onChange={(e) => {setDifficulty(e.target.value)}}>
                {/* <select name="difficulty"> */}
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>

                <input type="submit"/>
            </form>
        </div>
    </>
  )
}

export default QuizForm;
