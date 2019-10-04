import { connect } from 'react-redux';

import { Store } from '@app/store/root/reducer';
import { FavoritesPage } from '@app/components/FavoritesPage';

const mapStateToProps = (store: Store) => ({
  favorites: store.favorites.favorites,
});

export const ConnectedFavoritesPage = connect(mapStateToProps)(FavoritesPage);
