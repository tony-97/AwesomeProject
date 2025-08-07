import axios from 'axios';

import { Pokemon } from '../types/pokemon';

export const fetchPokemonList = async (): Promise<Pokemon[]> => {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=50',
  );

  return response.data.results;
};
