import React from 'react';
import { actors } from '../data';
const actorInfo = (actor) => {
  console.log(actor);
  return(<div className="actor">
    <h1>{actor.name}</h1>
    <ul>
      {actor.movies.map((movie, index) => (
      <li key={index}>{movie}</li>
      ))}
    </ul>
  </div>
  )
};
const string = "Actors list"
const Actors = () => {

  return (
  
    <div>
      <h1>Actors Page</h1>
      {actors.map(actorInfo)}
    </div>
  );
  
};

export default Actors;
