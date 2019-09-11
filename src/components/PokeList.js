import React from "react";
import Pokemon from "./Pokemon";

class PokeList extends React.Component {
  render() {
    const pokemonList = this.props.pokemons.map((pokemon, index) => {
      return (
        <Pokemon
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          types={pokemon.types}
          evolution={pokemon.evolution}
          url={pokemon.url}
        />
      );
    });
    return <ul>{pokemonList} </ul>;
  }
}

export default PokeList;
