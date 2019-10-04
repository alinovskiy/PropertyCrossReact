import { ActionTypes } from '@app/store/recents/actions';
import { createReducer } from '@app/services/createReducer';
import { PropertiesLocation } from '@app/types/locations.types';

export interface State {
  readonly searches: Array<PropertiesLocation>;
  readonly lastSearch: PropertiesLocation | null
}

export const initialState: State = {
  searches: [],
  lastSearch: null,
};


export const reducer = createReducer(initialState, {
  [ActionTypes.ADD_QUERY]: (state: State, payload: PropertiesLocation) => {
    const location = payload;
    let searches: Array<PropertiesLocation> = [...state.searches];
    if (searches.length === 5) {
      searches.pop();
    }
    if (state.searches.findIndex((search: PropertiesLocation) => location.id === search.id) < 0) {
      searches = [location, ...state.searches];
    }
    return {
      ...state,
      searches,
      lastSearch: location,
    };
  },
});
