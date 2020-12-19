import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(mov => { return <div>Name: {mov.title}, Time: {mov.time}
            <ul>
              Genres: {mov.genres.map(gen => {return <li>{gen}</li>}) }
            </ul>
          </div>
        })}
    </div>
  );
};

export default Movies;
