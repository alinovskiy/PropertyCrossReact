import { connect } from 'react-redux';

import { Store } from '@app/store/root/reducer';
import { getPropertyItem, resetProperty } from '@app/store/properties/actions';
import { PropertyPage } from '@app/components/PropertyPage';
import {
  addToFavorites,
  removeFromFavorites,
} from '@app/store/favorites/actions';

const mapStateToProps = (store: Store) => ({
  loading: store.properties.loading,
  property: store.properties.property,
  favorites: store.favorites.favorites,
});

const mapDispatchToProps = {
  getPropertyItem,
  resetProperty,
  addToFavorites,
  removeFromFavorites,
};

export const ConnectedPropertyPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertyPage);
