import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import { NavBar } from '@app/components/App/NavBar';
import { SearchInitialPage } from '@app/components/SearchInitialPage';
import { ConnectedPropertiesListPage } from '@app/containers/ConnectedPropertiesListPage';
import { ConnectedPropertyPage } from '@app/containers/ConnectedPropertyPage';
import { ConnectedFavoritesPage } from '@app/containers/ConnectedFavoritesPage';

export const App: React.FC = () => (
  <Router>
    <>
      <NavBar />
      <Route exact path="/" component={SearchInitialPage} />
      <Route exact path="/faves" component={ConnectedFavoritesPage} />
      <Route
        exact
        path="/:placeName/properties"
        component={ConnectedPropertiesListPage}
      />
      <Route
        exact
        path="/:placeName/properties/:id"
        component={ConnectedPropertyPage}
      />
    </>
  </Router>
);
