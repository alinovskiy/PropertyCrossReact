import { PropertyItem } from '@app/types/property.types';

export interface FavoritesStorage {
  [id: string]: PropertyItem;
}