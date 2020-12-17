import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { directors.map((director, index) => 
      <div className="director" key={index}>
        {director.name}
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>)}
    </div>
  );
}

export default Directors
