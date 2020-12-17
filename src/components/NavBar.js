import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
    <div className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/movies">Movies</NavLink>
      <NavLink exact to="/directors">Directors</NavLink>
      <NavLink exact to="/actors">Actors</NavLink>
    </div>
  );
};
}

export default NavBar;