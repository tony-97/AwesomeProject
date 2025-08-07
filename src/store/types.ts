import { Pokemon } from '../types/pokemon';

export interface AppState {
  favorites: Pokemon[];
}
export const ADD_FAVORITE = 'ADD_FAVORITE';

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;

  payload: Pokemon;
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;

  payload: string; // Pokemon name
}

export type AppActions = AddFavoriteAction | RemoveFavoriteAction;
