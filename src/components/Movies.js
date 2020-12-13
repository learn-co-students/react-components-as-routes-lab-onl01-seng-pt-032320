import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const getDirectors = directors.map((director, index) => {

    const directorsMovies = director.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })
  })
  return (
    <div>
       <h1>Movies Page</h1>
    </div>
  );
};

export default Movies;
