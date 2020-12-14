import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const allMovies = movies.map((movie, index) => {
    const movieGenres = movie.genres.map((genre, index) => {
      return (
        <li key={index}>{genre}</li>
      )
    })
    
    return (
      <div key={index} className="actor">
        <h1>{movie.title}</h1>
        <h4>{movie.time}</h4>
        <ul>
          { movieGenres }
        </ul>
      </div>
    )

  })
  return (
    <div>
      <h1>Movies Page</h1>
      { allMovies }
    </div>
  );
};

export default Movies;