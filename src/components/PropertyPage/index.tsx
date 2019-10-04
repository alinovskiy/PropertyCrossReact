import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { PropertyItem } from '@app/types/property.types';
import {
  GetPropertyItemAction,
  ResetPropertyAction,
} from '@app/store/properties/actions';
import { PropertyView } from './PropertyView';
import { Spinner } from '@app/components/common/Spinner';
import {
  AddToFavoritesAction,
  RemoveFromFavoritesAction,
} from '@app/store/favorites/actions';
import { FavoritesStorage } from '@app/types/favorites.types';

interface RouteParams {
  placeName: string;
  id: string;
}

export interface PropertyPageProps extends RouteComponentProps<RouteParams>{
  favorites: FavoritesStorage;
  property: PropertyItem;
  loading: boolean;
  getPropertyItem: (placeName: string, id: string) => GetPropertyItemAction;
  resetProperty: () => ResetPropertyAction;
  addToFavorites: (property: PropertyItem) => AddToFavoritesAction;
  removeFromFavorites: (propertyId: string) => RemoveFromFavoritesAction;
}

export class PropertyPage extends React.Component<PropertyPageProps> {
  componentDidMount() {
    const { placeName, id } = this.props.match.params;
    this.props.getPropertyItem(placeName, id);
  }

  componentWillUnmount() {
    this.props.resetProperty();
  }

  render() {
    const {
      property,
      loading,
      favorites,
      addToFavorites,
      removeFromFavorites,
    } = this.props;
    return loading ? (
      <Spinner />
    ) : (
      <PropertyView
        property={property}
        favorites={favorites}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    );
  }
}
