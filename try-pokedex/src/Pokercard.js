// Pokercard.js
import React from "react";
import "./index.css";

const Pokercard = ({ id, name, type, base_experience }) => {
  return (
    <div className="Pokercard">
      <div className="text1">
        <h1>{name}</h1>
      </div>
      <div>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${String(
            id
          ).padStart(3, "0")}.png`}
          alt={name}
        />
      </div>
      <div className="text">
        <p>Type: {type}</p>
      </div>
      <div className="text">
        <p>Base Experience: {base_experience}</p>
      </div>
    </div>
  );
};

Pokercard.defaultProps = {
  id: 25,
  name: "Pikachu",
  type: "electric",
  base_experience: 112,
};

export default Pokercard;
