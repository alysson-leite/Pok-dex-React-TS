import React, { useEffect, useState } from "react";
import PokemonItem from "../../components/pokemonItem";
import { Input } from "../../components/input"
import { Pokemon } from "./pokemon-model";
import { Button } from "../../components/button";
import { getPokemons } from "./pokeApi";
import { Link } from "react-router-dom";

const maxRecords = 151;
const offset = 0

const PokemonList: React.FC = () => {
  const [searchPokemon, setSearchPokemon] = useState<string>("");
  const [limit, setLimit] = useState<number>(12);
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [isLoadMoreDisabled, setIsLoadMoreDisabled] = useState<boolean>(false);

  const loadPokemonItems = async (offset: number, limit: number) => {
    try {
      const allPokemon = await getPokemons(offset, maxRecords);
      setAllPokemons(allPokemon);

    } catch (error) {
      console.error("Error to loading a pokemon");
    }
  };

  const handleLoadMore = async () => {
    const qtdRecordNextPage = offset + limit;

    if (qtdRecordNextPage >= maxRecords) {
      const newLimit = maxRecords - offset;
      await loadPokemonItems(offset, newLimit);
      setIsLoadMoreDisabled(true);
    } else {
      setLimit(limit + 12);
    }
  };

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(searchPokemon)
  );

  useEffect(() => {
    loadPokemonItems(offset, limit);
  }, [offset]);

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="Search Pokemon"
          value={searchPokemon}
          onChange={(e) => setSearchPokemon(e.target.value)}
        />
      </div>
      {filteredPokemons.length === 0 ? (
        <p className="noFound">No pokemon found</p>
      ) : (
        <ol className="pokemons">
          {filteredPokemons.slice(offset, limit).map((pokemon) => (
            <Link to={`/${pokemon.name}`} key={pokemon.number}>
              <PokemonItem pokemon={pokemon} />
            </Link>
          ))}
        </ol>
      )}
      <Button onClick={handleLoadMore} disabled={isLoadMoreDisabled}>
        Load More
      </Button>
    </div>
  );
};

export default PokemonList;
