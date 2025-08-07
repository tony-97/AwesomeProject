import { Pokemon } from '../types/pokemon';

import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  LOGIN,
  LOGOUT,
  LOGIN_ERROR,
  AppActions,
} from './types';

export const addFavorite = (pokemon: Pokemon): AppActions => ({
  type: ADD_FAVORITE,

  payload: pokemon,
});

export const removeFavorite = (name: string): AppActions => ({
  type: REMOVE_FAVORITE,

  payload: name,
});

export const login = (username: string, password: string): AppActions => {
  if (username === 'admin' && password === '1234') {
    return {
      type: LOGIN,
      payload: username,
    };
  } else {
    return {
      type: LOGIN_ERROR,
      payload: 'Usuario o contraseña incorrectos',
    };
  }
};

export const logout = (): AppActions => ({
  type: LOGOUT,
});
