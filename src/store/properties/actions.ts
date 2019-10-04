import { AxiosPromise } from 'axios';

import { nestoria } from '@app/services/api';
import { PropertiesResponse } from '@app/types/api.response.types';

export enum ActionTypes {
  GET_PROPERTIES = 'properties/GET_PROPERTIES',
  GET_PROPERTIES_REQUEST = 'properties/GET_PROPERTIES_REQUEST',
  GET_PROPERTIES_SUCCESS = 'properties/GET_PROPERTIES_SUCCESS',
  GET_PROPERTIES_FAILURE = 'properties/GET_PROPERTIES_FAILURE',
  RESET_PROPERTIES = 'properties/RESET_PROPERTIES',
  GET_PROPERTY_ITEM = 'properties/GET_PROPERTY_ITEM',
  GET_PROPERTY_ITEM_REQUEST = 'properties/GET_PROPERTY_ITEM_REQUEST',
  GET_PROPERTY_ITEM_SUCCESS = 'properties/GET_PROPERTY_ITEM_SUCCESS',
  GET_PROPERTY_ITEM_FAILURE = 'properties/GET_PROPERTY_ITEM_FAILURE',
  RESET_PROPERTY = 'properties/RESET_PROPERTY',
}

export interface GetPropertiesAction {
  type: ActionTypes.GET_PROPERTIES
    | ActionTypes.GET_PROPERTIES_REQUEST
    | ActionTypes.GET_PROPERTIES_SUCCESS
    | ActionTypes.GET_PROPERTIES_FAILURE
  request: AxiosPromise
  payload?: PropertiesResponse
}

export interface GetPropertyItemAction {
  type: ActionTypes.GET_PROPERTY_ITEM
    | ActionTypes.GET_PROPERTY_ITEM_REQUEST
    | ActionTypes.GET_PROPERTY_ITEM_SUCCESS
    | ActionTypes.GET_PROPERTY_ITEM_FAILURE
  request: AxiosPromise
  payload?: PropertiesResponse
}

export interface ResetPropertiesAction {
  type: ActionTypes.RESET_PROPERTIES
}

export interface ResetPropertyAction {
  type: ActionTypes.RESET_PROPERTY
}

export const getProperties = (placeName: string, page: number): GetPropertiesAction => ({
  type: ActionTypes.GET_PROPERTIES,
  request: nestoria.get(`/locations/${placeName}/properties`, { params: { page } }),
});

export const getPropertyItem = (placeName: string, id: string): GetPropertyItemAction =>({
  type: ActionTypes.GET_PROPERTY_ITEM,
  request: nestoria.get(`/locations/${placeName}/properties/${id}`)
});

export const resetProperties = (): ResetPropertiesAction => ({
  type: ActionTypes.RESET_PROPERTIES
});

export const resetProperty = (): ResetPropertyAction => ({
  type: ActionTypes.RESET_PROPERTY
});