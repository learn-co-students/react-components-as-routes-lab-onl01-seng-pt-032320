import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir => { return <div>Name: {dir.name}
            <ul>
              Movies: {dir.movies.map(mov => {return <li>{mov}</li>}) }
            </ul>
          </div>
        })}
    </div>
  );
}

export default Directors
