import { connect } from 'react-redux';

import {
  getLocationsByName,
  getLocationsByCoords,
} from '@app/store/locations/actions';
import { SearchPanel } from '@app/components/SearchInitialPage/SearchPanel';
import { Store } from '@app/store/root/reducer';

const mapStateToProps = (store: Store) => ({
  lastSearch: store.recents.lastSearch,
});

const mapDispatchToProps = {
  getLocationsByName,
  getLocationsByCoords,
};

export const ConnectedSearchPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel);
