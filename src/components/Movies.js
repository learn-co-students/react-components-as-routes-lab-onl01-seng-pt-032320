import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  return (
    <div>
        <h1> Movies Page </h1>
        {movies.map((movie, i) => 
        <div
        key={i}
        className="movie"> 
          Movie: {movie.title} ({movie.time} min)
          <ul
          className="movie-genres">
           Genres: {movie.genres.map((genre, i) => <li key={i}> {genre} </li>)}
          </ul>
          <br></br>
        </div>
        )}
    </div>
  );
};

export default Movies;
