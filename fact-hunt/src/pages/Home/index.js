import React from 'react'
import CreateButton from '../../components/CreateButton'
import HighscoresButton from '../../components/HighscoresButton'
import JoinButton from '../../components/JoinButton'
import './style.css'

const Home = () => {
  return (
    <div id="buttons-container">
        <CreateButton/>
        <JoinButton/>
        <HighscoresButton/>
    </div>
  )
}

export default Home;
