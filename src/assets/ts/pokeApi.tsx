import { Pokemon } from "./pokemon-model";

interface PokeDetail {
  id: number;
  name: string;
  weight: number;
  height: number;
  abilities: { ability: { name: string } }[];
  types: { type: { name: string } }[];
  moves: {
    move: { name: string; url: string; detail: string };
    version_group_details: {
      level_learned_at: number;
    }[];
  }[];
  stats: { stat: { name: string }; base_stat: number }[];
  sprites: { other: { dream_world: { front_default: string } } };
}

function convertPokeApiDetailToPokemon(pokeDetail: PokeDetail): Pokemon {
  const { id, name, abilities, types, moves, stats, height, weight, sprites } =
    pokeDetail;
  const pokemon = new Pokemon();

  //Details
  pokemon.number = id;
  pokemon.name = name;
  pokemon.height = height;
  pokemon.weight = weight;

  //Abilities
  const abilityNames = abilities.map(({ ability }) => ability.name);
  pokemon.abilities = abilityNames;
  pokemon.ability = abilityNames[0];

  //Types
  const typeNames = types.map(({ type }) => type.name);
  pokemon.types = typeNames;
  pokemon.type = typeNames[0];

  //Moves
  const movesNames = moves.map(({ move }) => move.name);
  pokemon.moves = movesNames;

  //Move name and url
  const moveDescription = moves.map(({ move }) => ({
    name: move.name,
    url: move.url,
    detail: move.detail,
  }));
  pokemon.move = moveDescription[0];

  // Level Learned
  const levelLearned = moves.map(({ version_group_details }) => version_group_details[0].level_learned_at);
  pokemon.version_group_details = levelLearned;

  // Stats
  const statsName = stats.map(({ stat }) => stat.name);
  pokemon.stats = statsName;

  const statsNumber = stats.map(({ base_stat }) => base_stat);
  pokemon.baseStats = statsNumber;

  //Photo
  pokemon.photo = sprites.other.dream_world.front_default;

  return pokemon;
}

// Pokemon Details
export const getPokemonDetail = async (pokemon: {
  url: string;
}): Promise<Pokemon> => {
  try {
    const response = await fetch(pokemon.url);
    const data = await response.json();
    return convertPokeApiDetailToPokemon(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Pokemons List
export const getPokemons = async (
  offset: number,
  limit: number
): Promise<Pokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const jsonBody = await response.json();
    const pokemons = jsonBody.results;

    const detailRequests = pokemons.map((pokemon: any) =>
      getPokemonDetail(pokemon)
    );
    const pokemonsDetails = await Promise.all(detailRequests);

    return pokemonsDetails;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Pokemon Stats
export const getPokemonStats = async (pokemon: string): Promise<Pokemon> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const pokemon = convertPokeApiDetailToPokemon(data);

    return pokemon;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
