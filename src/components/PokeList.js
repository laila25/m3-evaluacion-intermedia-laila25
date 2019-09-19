import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokelist.css";

class PokeList extends React.Component {
  render() {
    const pokemonList = this.props.pokemons.map((pokemon, index) => {
      return (
        <li key={index} className="item">
          <Pokemon
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
            evolution={pokemon.evolution}
            url={pokemon.url}
          />
        </li>
      );
    });
    return <ul>{pokemonList} </ul>;
  }
}

export default PokeList;
