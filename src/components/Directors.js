import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const allDirectors = directors.map((director, index) => {

    const directorsMovies = director.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })
    
    return (
      <div key={index} className="actor">
        <h1>{director.name}</h1>
        <ul>
          {directorsMovies}
        </ul>
      </div>
    )

  })
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        { allDirectors }
      </ul>
    </div>
  );
}

export default Directors