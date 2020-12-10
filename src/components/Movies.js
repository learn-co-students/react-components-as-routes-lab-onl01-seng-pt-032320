import React from 'react';
import { movies } from '../data';

const movieslist = (movie) => {
  return(
  <div className="movies">
    <h2>{movie.title}</h2>
    <h2>{movie.time}</h2>
  <ul>
    {movie.genres.map((genre) => (
      <li>{genre}</li>
    ))}
  </ul>
  </div>
  )
};

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movieslist)}
    </div>
  );
};

export default Movies;
