import React from 'react';
import { NavLink } from 'react-router-dom';
import Directors from './Directors';
import Home from './Home';
import Movies from './Movies';

const NavBar = () => {
  return (
    <div className='navbar'> 
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/movies'>Movies</NavLink>
      <NavLink to='/directors'>Directors</NavLink>
      <NavLink to='/actors'>Actors</NavLink>
    </div>
  );
};

export default NavBar;
