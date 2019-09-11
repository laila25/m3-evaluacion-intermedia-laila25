import React from "react";

class Pokemon extends React.Component {
  render() {
    const typesList = this.props.types.map((type, index) => {
      return (
        <li key={index} className="typeItem">
          {type}{" "}
        </li>
      );
    });
    return (
      <li key={this.props.id} className="item">
        <img src={`${this.props.url}`} alt=""></img>
        <h2 className="title">{this.props.name}</h2>
        <ul className="types">{typesList}</ul>
      </li>
    );
  }
}

export default Pokemon;
