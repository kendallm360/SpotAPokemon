import React, { Component } from "react";
import Pokemons from "./Pokemons";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: [],
      array: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ],
      images: [],
    };
  }

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState((prevState) => {
          return { ...prevState, pokemon: data.results };
        });
      });

    this.state.array.forEach((e) => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`)
        .then((response) => response.json())
        .then((data) => {
          this.state.images.push(data.sprites.front_default);
        });
    });
  };

  render() {
    let allPokemon = this.state.pokemon.map((poke) => {
      return (
        <Pokemons
          id={poke.url.split("/")[6]}
          name={poke.name}
          images={this.state.images}
        />
      );
    });
    return <div className="poke-bucket">{allPokemon}</div>;
  }
}

export default Pokemon;
