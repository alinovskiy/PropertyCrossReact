import * as React from 'react';

import { RecentSearchesList } from '@app/components/SearchInitialPage/RecentSearchesList';
import { LocationsList } from '@app/components/SearchInitialPage/LocationsList';
import { ErrorAlert } from '@app/components/SearchInitialPage/ErrorAlert';
import { Spinner } from '@app/components/common/Spinner';
import { AddQueryAction } from '@app/store/recents/actions';
import {
  ResetSearchAction,
} from '@app/store/locations/actions';
import { PropertiesLocation } from '@app/types/locations.types';
import { SearchStatuses } from '@app/types/searchStatus.types';

export interface ServicePanelProps {
  searches: Array<PropertiesLocation>;
  status: string;
  locations: Array<PropertiesLocation>;
  error: string;
  addQuery: (location: PropertiesLocation) => AddQueryAction
  resetSearch: () => ResetSearchAction
}

export const ServicePanel: React.FC<ServicePanelProps> = (
  { searches, status, locations, error, addQuery, resetSearch },
) => {
  const content = {
    [SearchStatuses.INIT]: <RecentSearchesList searches={searches}/>,
    [SearchStatuses.LOADING]: <Spinner/>,
    [SearchStatuses.SUCCESS]: <LocationsList locations={locations}
                                             addQuery={addQuery}
                                             resetSearch={resetSearch}/>,
    [SearchStatuses.FAILURE]: <ErrorAlert message={error}/>,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 offset-sm-3 mb-3">
          {content[status]}
        </div>
      </div>
    </div>
  );
};
