import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const allActors = actors.map((actor, index) => {

    const actorsMovies = actor.movies.map((movie, index) => {
      return <li key={index}>{movie}</li>
    })
    
    return (
      <div key={index} className="actor">
        <h1>{actor.name}</h1>
        <ul>
          {actorsMovies}
        </ul>
      </div>
    )

  })

  return (
    <div>
      <h1>Actors Page</h1>
      { allActors }
    </div>
  );
};

export default Actors;
