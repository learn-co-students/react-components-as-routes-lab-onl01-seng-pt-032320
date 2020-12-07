import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1> Directors Page </h1>
      {directors.map((director, i) => 
        <div
        key={i}
        className="director"> 
          Director: {director.name}
          <ul
          className="director-movies">
           Movies: {director.movies.map((movie, i) => <li key={i}> {movie} </li>)}
          </ul>
          <br></br>
        </div>
        )}

    </div>
  );
}

export default Directors
