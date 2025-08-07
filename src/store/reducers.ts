import {
  AppState,
  AppActions,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  LOGIN,
  LOGOUT,
} from './types';

const initialState: AppState = {
  favorites: [],
  isLoggedIn: false,
  user: null,
};

export const appReducer = (
  state = initialState,

  action: AppActions,
): AppState => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(p => p.name !== action.payload),
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
