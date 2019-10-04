import { State as LocationState } from '@app/store/locations/reducer';
import { State as RecentsState } from '@app/store/recents/reducer';
import { State as PropertiesState } from '@app/store/properties/reducer';
import { State as FavoritesState } from '@app/store/favorites/reducer';

type InitialState =
  | LocationState
  | RecentsState
  | PropertiesState
  | FavoritesState;

export const createReducer = (initialState: InitialState, reducerMap: any) => (
  state = initialState,
  action: any
) => {
  const reducer = reducerMap[action.type];
  return reducer ? reducer(state, action.payload) : state;
};
