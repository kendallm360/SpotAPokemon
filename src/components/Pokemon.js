import React, { Component } from "react";

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  };

  render() {
    return (
      <>
        <p>Pokemon will be here</p>
      </>
    );
  }
}

export default Pokemon;
