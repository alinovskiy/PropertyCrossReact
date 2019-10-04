import { PropertyItem } from '@app/types/property.types';
import { PropertiesLocation } from '@app/types/locations.types';

export type PropertiesResponse = {
  properties: Array<PropertyItem>
  location: PropertiesLocation
  hasMore: boolean
  totalResults: number
  page: number
}

export type LocationsResponse = Array<PropertiesLocation>

