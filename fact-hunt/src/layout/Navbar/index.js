import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h1>Big Fact Hunt</h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            {/* will need to change this */}
            <Link to='/quiz'>New Quiz</Link>
        </div>
    </nav>
  )
}

export default Navbar;
