import { connect } from 'react-redux';

import { Store } from '@app/store/root/reducer';
import { getProperties, resetProperties } from '@app/store/properties/actions';
import { PropertiesListPage } from '@app/components/PropertiesListPage';

const mapStateToProps = (store: Store) => ({
  page: store.properties.page,
  loading: store.properties.loading,
  properties: store.properties.properties,
  hasMore: store.properties.hasMore,
  location: store.properties.location,
  totalResults: store.properties.totalResults,
});

const mapDispatchToProps = {
  getProperties,
  resetProperties,
};

export const ConnectedPropertiesListPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(PropertiesListPage);
