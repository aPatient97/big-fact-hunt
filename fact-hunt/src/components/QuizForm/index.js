import React, { useEffect, useState, useRef } from 'react'
import QuizData from '../QuizData';

const QuizForm = () => {
  const [categories, setCategories] = useState({});
  const [url, setUrl] = useState();
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState("easy");
//   const difficultyRef = useRef();
//   const categoryRef = useRef();

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
        const gameUrl = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
        setUrl(gameUrl)
        console.log(url);
    } catch (err) {
        console.warn(err)
    }

  }
  
  
  return (
    <>
        <div>
            <h2>Choose your quiz settings</h2>
            <form onSubmit={handleSubmit}>
                <div>Category:</div>
                <select name="difficulty" onChange={(e) => {setCategory(e.target.value)}}>
                {/* <select name="categoryId"> */}
                    {allCategories}
                </select>

                <div>Difficulty Level:</div>
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
