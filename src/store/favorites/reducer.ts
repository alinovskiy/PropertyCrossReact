import { createReducer } from '@app/services/createReducer';
import {
  ActionTypes,
  loadFavoritesFromLocalStorage,
} from '@app/store/favorites/actions';
import { FavoritesStorage } from '@app/types/favorites.types';

export interface State {
  favorites: FavoritesStorage;
}

export const initialState: State = {
  favorites: loadFavoritesFromLocalStorage(),
};

const addItemToFavorites = (state: State, favorites: FavoritesStorage) => ({
  ...state,
  favorites,
});

const removeItemFromFavorites = (
  state: State,
  favorites: FavoritesStorage
) => ({
  ...state,
  favorites,
});

export const reducer = createReducer(initialState, {
  [ActionTypes.ADD_TO_FAVES]: addItemToFavorites,
  [ActionTypes.DELETE_FROM_FAVES]: removeItemFromFavorites,
});
