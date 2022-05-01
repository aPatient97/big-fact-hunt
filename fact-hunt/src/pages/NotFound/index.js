import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => {
  return (
    <div className='not-found'>
        <h2>Sorry!</h2>
        <p>This page cannot be found.</p>
        <Link to="/">Click here to go back to the homepage...</Link>
    </div>
  )
}

export default NotFound;
