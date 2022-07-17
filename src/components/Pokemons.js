import React from "react";
import "./Pokemons.css";

const Pokemons = ({ id, name, images }) => {
  let pics = images.find((e) => e.includes(id));
  return (
    <div className="pokes">
      <h1>{name}</h1>
      <img src={pics} alt={`Picture of Pokemon${name}`} />
    </div>
  );
};

export default Pokemons;
