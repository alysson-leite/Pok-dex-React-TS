import React, { useEffect, useState } from "react";
import { Pokemon } from "./pokemon-model";
import { getPokemonStats } from "./pokeApi";
import PokemonData from "../../components/pokemonStats/index";
import { Button } from "../../components/button";
import { Link, useParams } from "react-router-dom";

interface PokemonStatsProps {
  pokemon: Pokemon;
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  const { pokemonName } = useParams<{ pokemonName: string }>();
  const [pokemonStats, setPokemonStats] = useState<Pokemon>();

  const loadPokemonStats = async () => {
    try {
      const stats = await getPokemonStats(pokemonName);
      setPokemonStats(stats);

    } catch (error) {
      console.error("Error to loading a stat of pokemon", error);
    }
  };

  useEffect(() => {
    if (pokemon) {
      loadPokemonStats();
    }
  }, []);

  console.log(pokemonStats);

  return (
    <div>
      {pokemonStats ? (
        <>
          <PokemonData pokemon={pokemonStats} />
          <Link to="/">
            <Button disabled={false}>Back</Button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonStats;
