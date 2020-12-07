import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page </h1>
        {actors.map((actor, i) => 
        <div
        key={i}
        className="actor"> 
          Actor: {actor.name}
          <ul
          className="actor-movies">
           Movies: {actor.movies.map((movie, i) => <li key={i}> {movie} </li>)}
          </ul>
          <br></br>
        </div>
        )}
    </div>
  )
}

export default Actors;
