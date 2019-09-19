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

let pokeFav = [];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemonsFav: []
    };

    getDataFromServer().then(pokemons => {
      this.setState({ pokemons: pokemons });
    });
    this.addToFav = this.addToFav.bind(this);
  }

  addToFav(ev) {
    const pokeSelected = parseInt(ev.currentTarget.dataset.id);
    let number = pokeFav.indexOf(pokeSelected);
    if (pokeFav.includes(pokeSelected)) {
      pokeFav.splice(number, 1);
    } else {
      pokeFav[pokeFav.length] = pokeSelected;
    }
    this.setState({
      pokemonsFav: pokeFav
    });
  }

  render() {
    return (
      <div>
        <h1 className="appTitle">Mi Lista de Pokemon</h1>
        <PokeList
          pokemons={this.state.pokemons}
          addToFav={this.addToFav}
          pokemonsFav={this.state.pokemonsFav}
        />
      </div>
    );
  }
}

export default App;
