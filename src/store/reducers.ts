import { AppState, AppActions, ADD_FAVORITE, REMOVE_FAVORITE } from './types';

const initialState: AppState = {
  favorites: [],
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

    default:
      return state;
  }
};
