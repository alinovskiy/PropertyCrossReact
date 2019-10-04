import { connect } from 'react-redux';

import { Store } from '@app/store/root/reducer';
import { ServicePanel } from '@app/components/SearchInitialPage/ServicePanel';
import { addQuery } from '@app/store/recents/actions';
import { resetSearch } from '@app/store/locations/actions';

const mapStateToProps = (store: Store) => ({
  searches: store.recents.searches,
  status: store.locations.searchStatus,
  locations: store.locations.locations,
  error: store.locations.errorMessage,
});

const mapDispatchToProps = {
  addQuery,
  resetSearch,
};

export const ConnectedServicePanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServicePanel);
