import { AxiosPromise } from 'axios';

import { nestoria } from '@app/services/api';
import { LocationCoordinates } from '@app/types/coordinates.types';
import { LocationsResponse } from '@app/types/api.response.types';

export enum ActionTypes {
  GET_LOCATIONS_BY_NAME = 'locations/GET_LOCATIONS_BY_NAME',
  GET_LOCATIONS_BY_NAME_REQUEST = 'locations/GET_LOCATIONS_BY_NAME_REQUEST',
  GET_LOCATIONS_BY_NAME_SUCCESS = 'locations/GET_LOCATIONS_BY_NAME_SUCCESS',
  GET_LOCATIONS_BY_NAME_FAILURE = 'locations/GET_LOCATIONS_BY_NAME_FAILURE',
  GET_LOCATIONS_BY_COORDS = 'locations/GET_LOCATIONS_BY_COORDS',
  GET_LOCATIONS_BY_COORDS_REQUEST = 'locations/GET_LOCATIONS_BY_COORDS_REQUEST',
  GET_LOCATIONS_BY_COORDS_SUCCESS = 'locations/GET_LOCATIONS_BY_COORDS_SUCCESS',
  GET_LOCATIONS_BY_COORDS_FAILURE = 'locations/GET_LOCATIONS_BY_COORDS_FAILURE',
  RESET_SEARCH = 'locations/RESET_SEARCH'
}

export interface GetLocationActionByName {
  type: ActionTypes.GET_LOCATIONS_BY_NAME
    | ActionTypes.GET_LOCATIONS_BY_NAME_REQUEST
    | ActionTypes.GET_LOCATIONS_BY_NAME_SUCCESS
    | ActionTypes.GET_LOCATIONS_BY_NAME_FAILURE
  request: AxiosPromise
  payload?: LocationsResponse
}

export interface GetLocationActionByCoords {
  type: ActionTypes.GET_LOCATIONS_BY_COORDS
    | ActionTypes.GET_LOCATIONS_BY_COORDS_REQUEST
    | ActionTypes.GET_LOCATIONS_BY_COORDS_SUCCESS
    | ActionTypes.GET_LOCATIONS_BY_COORDS_FAILURE
  request: AxiosPromise
  payload?: any
}

export interface ResetSearchAction {
  type: ActionTypes.RESET_SEARCH
}

export const getLocationsByName = (placeName: string): GetLocationActionByName => ({
  type: ActionTypes.GET_LOCATIONS_BY_NAME,
  request: nestoria.get('/locations/searchByName', { params: { placeName } }),
});

export const getLocationsByCoords = (coords: LocationCoordinates): GetLocationActionByCoords => ({
  type: ActionTypes.GET_LOCATIONS_BY_COORDS,
  request: nestoria.get('/locations/searchByCoordinates', { params: coords }),
});

export const resetSearch = (): ResetSearchAction => ({
  type: ActionTypes.RESET_SEARCH,
});
