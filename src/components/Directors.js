import React from 'react';
import { directors } from '../data';

const directorsInfo = (director) => {
  return (
    <div>
  <h1 className="directors">{director.name}</h1>
  <ul>
    {director.movies.map((movie) => (
      <li>{movie}</li>
    ))}
  </ul>
  </div>
  )
};
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(directorsInfo)}
    </div>
  );
}

export default Directors
