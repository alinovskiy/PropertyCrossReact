import { ActionTypes } from '@app/store/locations/actions';
import { createReducer } from '@app/services/createReducer';
import { PropertiesLocation } from '@app/types/locations.types';
import { SearchStatuses } from '@app/types/searchStatus.types';

export interface State {
  locations: Array<PropertiesLocation>,
  searchStatus: SearchStatuses.INIT | SearchStatuses.LOADING | SearchStatuses.SUCCESS | SearchStatuses.FAILURE
  errorMessage: string
}

export const initialState: State = {
  locations: [],
  searchStatus: SearchStatuses.INIT,
  errorMessage: '',
};

const loadingActionsHandler = (state: State) => ({
  ...state,
  searchStatus: SearchStatuses.LOADING,
  errorMessage: '',
});

const successActionsHandler = (state: State, locations: Array<PropertiesLocation>) => ({
  ...state,
  searchStatus: SearchStatuses.SUCCESS,
  locations,
});

const failureActionsHandler = (state: State, errorMessage: string) => ({
  ...state,
  searchStatus: SearchStatuses.FAILURE,
  errorMessage,
});

export const reducer = createReducer(initialState, {
  [ActionTypes.GET_LOCATIONS_BY_NAME_REQUEST]: loadingActionsHandler,
  [ActionTypes.GET_LOCATIONS_BY_COORDS_REQUEST]: loadingActionsHandler,
  [ActionTypes.GET_LOCATIONS_BY_NAME_SUCCESS]: successActionsHandler,
  [ActionTypes.GET_LOCATIONS_BY_COORDS_SUCCESS]: successActionsHandler,
  [ActionTypes.GET_LOCATIONS_BY_NAME_FAILURE]: failureActionsHandler,
  [ActionTypes.GET_LOCATIONS_BY_COORDS_FAILURE]: failureActionsHandler,
  [ActionTypes.RESET_SEARCH]: () => initialState,
});

