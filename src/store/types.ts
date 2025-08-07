import { Pokemon } from '../types/pokemon';

export interface AppState {
  favorites: Pokemon[];
  isLoggedIn: boolean;
  user: string | null;
  loginError?: string | null;
}
export const ADD_FAVORITE = 'ADD_FAVORITE';

export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';

interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;

  payload: Pokemon;
}

interface RemoveFavoriteAction {
  type: typeof REMOVE_FAVORITE;

  payload: string; // Pokemon name
}

interface LoginAction {
  type: typeof LOGIN;
  payload: string; // username
}

interface LogoutAction {
  type: typeof LOGOUT;
}

interface LoginErrorAction {
  type: typeof LOGIN_ERROR;
  payload: string; // error message
}

export type AppActions =
  | AddFavoriteAction
  | RemoveFavoriteAction
  | LoginAction
  | LogoutAction
  | LoginErrorAction;
