import React from "react";
import "../stylesheets/App.css";
import PokeList from "./PokeList";

const getDataFromServer = () => {
  return fetch("./api-data.json")
    .then(response => response.json())
    .then(pokemonsApi => {
      return pokemonsApi.map(pokemonApi => {
        return {
          id: pokemonApi.id,
          name: pokemonApi.name,
          types: pokemonApi.types,
          evolution: pokemonApi.evolution,
          url: pokemonApi.url
        };
      });
    });
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: []
    };

    getDataFromServer().then(pokemons => {
      console.log(pokemons);
      this.setState({ pokemons });
    });
  }
  render() {
    return (
      <div>
        <h1 className="appTitle">Mi Lista de Pokemon</h1>
        <PokeList pokemons={this.state.pokemons} />
      </div>
    );
  }
}

export default App;
