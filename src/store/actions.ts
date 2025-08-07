import { Pokemon } from '../types/pokemon';

import { ADD_FAVORITE, REMOVE_FAVORITE, AppActions } from './types';

export const addFavorite = (pokemon: Pokemon): AppActions => ({
  type: ADD_FAVORITE,

  payload: pokemon,
});

export const removeFavorite = (name: string): AppActions => ({
  type: REMOVE_FAVORITE,

  payload: name,
});
