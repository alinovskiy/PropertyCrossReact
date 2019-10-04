import { combineReducers } from 'redux';

import * as recents from '@app/store/recents/reducer';
import * as locations from '@app/store/locations/reducer';
import * as properties from '@app/store/properties/reducer';
import * as favorites from '@app/store/favorites/reducer';

export interface Store {
  recents: recents.State;
  locations: locations.State;
  properties: properties.State;
  favorites: favorites.State;
}

export const initialStore: Store = {
  recents: recents.initialState,
  locations: locations.initialState,
  properties: properties.initialState,
  favorites: favorites.initialState,
};

export const rootReducer = combineReducers<Store>({
  recents: recents.reducer,
  locations: locations.reducer,
  properties: properties.reducer,
  favorites: favorites.reducer,
});
