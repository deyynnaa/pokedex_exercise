// Pokedex.js
import React, { useState, useEffect } from "react";
import Pokercard from "./Pokercard";
import Pokegame from "./Pokegame";
import "./index.css";

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Pokedex = ({ pokemonData }) => {
  const [shuffledPokemonData, setShuffledPokemonData] = useState([
    ...pokemonData,
  ]);
  const [isLeftWinner, setisLeftWinner] = useState(false);

  const randomizeCards = () => {
    const shuffledArray = shuffleArray(pokemonData);
    setShuffledPokemonData(shuffledArray);
  };

  const calculateTotalExperience = (hand) => {
    return hand.reduce((total, pokemon) => total + pokemon.base_experience, 0);
  };

  const leftColumn = shuffledPokemonData.slice(0, 4);
  const rightColumn = shuffledPokemonData.slice(4, 8);

  const totalExperienceLeft = calculateTotalExperience(leftColumn);
  const totalExperienceRight = calculateTotalExperience(rightColumn);

  useEffect(() => {
    console.log(`Left ${totalExperienceLeft}`);
    console.log(`Right ${totalExperienceRight}`);
    if (totalExperienceLeft > totalExperienceRight) {
      setisLeftWinner(true);
    } else {
      setisLeftWinner(false);
    }
  }, [totalExperienceLeft, totalExperienceRight]);

  return (
    <div>
      <Pokegame
        onClick={randomizeCards}
        isLeftWinner={isLeftWinner}
        totalExperienceLeft={totalExperienceLeft}
        totalExperienceRight={totalExperienceRight}
      />
      <div className="Pokedex">
        <div className="column1">
          {leftColumn.map((pokemon) => (
            <Pokercard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              base_experience={pokemon.base_experience}
            />
          ))}
        </div>
        <div className="column2">
          {rightColumn.map((pokemon) => (
            <Pokercard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              base_experience={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Pokedex.defaultProps = {
  pokemonData: [
    { id: 4, name: "Charmander", type: "FIRE", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "WATER", base_experience: 163 },
    { id: 11, name: "Metapod", type: "BUG", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "FLYING", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "ELECTRIC", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "NORMAL", base_experience: 95 },
    { id: 94, name: "Gengar", type: "POISON", base_experience: 225 },
    { id: 133, name: "Eevee", type: "NORMAL", base_experience: 65 },
  ],
};

export default Pokedex;
