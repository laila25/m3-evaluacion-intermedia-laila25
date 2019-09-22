import React from "react";
import "../stylesheets/pokemon.css";
class Pokemon extends React.Component {
  render() {
    const typesList = this.props.types.map((type, index) => {
      return (
        <li key={index} className="typeItem">
          {type}
        </li>
      );
    });

    if (this.props.pokemonsFav.includes(this.props.id)) {
      return (
        <React.Fragment>
          <img src={this.props.url} alt=""></img>
          <h2 className="title">
            <span className="fav">❤︎ </span>
            {this.props.name}
          </h2>
          <ul className="types">{typesList}</ul>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <img src={this.props.url} alt=""></img>
          <h2 className="title">{this.props.name}</h2>
          <ul className="types">{typesList}</ul>
        </React.Fragment>
      );
    }
  }
}

export default Pokemon;
