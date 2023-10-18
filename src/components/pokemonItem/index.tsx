import React from "react";
import { PokeCard, Number, Name, Detail, Type } from "./styles";
import { Pokemon } from "../../assets/ts/pokemon-model";
import { PokeballCard } from "../pokeball/pokeballCard";
import "../../assets/styles/styles.css";

interface PokemonItemProps {
  pokemon: Pokemon;
}

export const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon }) => {

  return (
    <PokeCard className={`${pokemon.type}`}>
      <PokeballCard />
      <Number>#{pokemon.number}</Number>
      <Name>{pokemon.name}</Name>
      <Detail>
        <ol className="types">
          {pokemon.types.map((type) => (
            <Type key={type} className={`${type}`}>
              {type}
            </Type>
          ))}
        </ol>
        <img src={pokemon.photo} alt={pokemon.name} />
      </Detail>
    </PokeCard>
  );
};

export default PokemonItem;
