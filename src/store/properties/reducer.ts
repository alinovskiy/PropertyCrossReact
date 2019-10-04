import { PropertyItem } from '@app/types/property.types';
import { createReducer } from '@app/services/createReducer';
import { ActionTypes } from '@app/store/properties/actions';
import { PropertiesLocation } from '@app/types/locations.types';
import { PropertiesResponse } from '@app/types/api.response.types';

export interface State {
  properties: Array<PropertyItem>;
  property: PropertyItem | null;
  location: PropertiesLocation | null;
  hasMore: boolean;
  totalResults: number;
  page: number;
  errorMessage: string;
  loading: boolean;
}

export const initialState: State = {
  properties: [],
  property: null,
  location: null,
  hasMore: false,
  totalResults: 0,
  errorMessage: '',
  loading: false,
  page: 0,
};

const loadingHandler = (state: State) => ({
  ...state,
  errorMessage: '',
  loading: true,
});

const successGetPropertiesHandler = (
  state: State,
  { page, properties, hasMore, totalResults, location }: PropertiesResponse
) => ({
  ...state,
  properties: [...state.properties, ...properties],
  loading: false,
  location,
  page,
  hasMore,
  totalResults,
});

const successGetPropertyItemHandler = (
  state: State,
  property: PropertyItem
) => ({
  ...state,
  property,
  loading: false,
});

const failureHandler = (state: State, errorMessage: string) => ({
  ...state,
  loading: false,
  errorMessage,
});

const resetPropertiesHandler = () => initialState;

export const reducer = createReducer(initialState, {
  [ActionTypes.GET_PROPERTIES_REQUEST]: loadingHandler,
  [ActionTypes.GET_PROPERTY_ITEM_REQUEST]: loadingHandler,
  [ActionTypes.GET_PROPERTIES_SUCCESS]: successGetPropertiesHandler,
  [ActionTypes.GET_PROPERTY_ITEM_SUCCESS]: successGetPropertyItemHandler,
  [ActionTypes.GET_PROPERTIES_FAILURE]: failureHandler,
  [ActionTypes.GET_PROPERTY_ITEM_FAILURE]: failureHandler,
  [ActionTypes.RESET_PROPERTIES]: resetPropertiesHandler,
});
