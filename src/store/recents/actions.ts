import { PropertiesLocation } from '@app/types/locations.types';

export enum ActionTypes {
  ADD_QUERY = 'recents/ADD_QUERY'
}

export interface AddQueryAction {
  type: ActionTypes.ADD_QUERY
  payload: PropertiesLocation
}

export const addQuery = (query: PropertiesLocation): AddQueryAction => ({
    type: ActionTypes.ADD_QUERY,
    payload: query
});

