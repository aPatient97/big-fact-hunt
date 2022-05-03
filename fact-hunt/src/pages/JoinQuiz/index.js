import React from 'react'

const JoinQuiz = () => {
  return (
    <div>
        <form>
            <label htmlFor='username'>Enter Username: </label>
            <input type="text" placeholder="Enter username" name="username"/>
            <label htmlFor='room-name'>Room name: </label>
            <input type='text' placeholder='room name' name='room-name'/>
            <input type="submit" value="join game"/>
        </form>
    </div>
  )
}

export default JoinQuiz;
