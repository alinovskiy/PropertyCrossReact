import { PropertyItem } from '@app/types/property.types';
import { FavoritesStorage } from '@app/types/favorites.types';
import omit from 'lodash.omit';

export const FAVORITES = 'favorites';

export const loadFavoritesFromLocalStorage = (): FavoritesStorage => (
  JSON.parse(localStorage.getItem(FAVORITES) || '{}')
);

export enum ActionTypes {
  ADD_TO_FAVES = 'favorites/ADD_TO_FAVES',
  DELETE_FROM_FAVES = 'favorites/DELETE_FROM_FAVES',
}

export interface AddToFavoritesAction {
  type: ActionTypes.ADD_TO_FAVES;
  payload: FavoritesStorage
}

export interface RemoveFromFavoritesAction {
  type: ActionTypes.ADD_TO_FAVES;
  payload: FavoritesStorage
}

export const addToFavorites = (property: PropertyItem) => {
  const favorites: FavoritesStorage = loadFavoritesFromLocalStorage();
  favorites[property.id] = property;
  localStorage.setItem(FAVORITES, JSON.stringify(favorites));

  return {
    type: ActionTypes.ADD_TO_FAVES,
    payload: favorites,
  };
};

export const removeFromFavorites = (propertyId: string) => {
  const favorites: FavoritesStorage = loadFavoritesFromLocalStorage();
  const newFavorites = omit(favorites, [propertyId]);
  localStorage.setItem(FAVORITES, JSON.stringify(newFavorites));

  return {
    type: ActionTypes.DELETE_FROM_FAVES,
    payload: newFavorites,
  };
};