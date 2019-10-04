import * as React from 'react';
import { Link } from 'react-router-dom';

import { PropertiesLocation } from '@app/types/locations.types';

interface RecentSearchesListProps {
  searches: Array<PropertiesLocation>;
}

const renderRecents = (searches: Array<PropertiesLocation>) =>
  searches.map(query => (
    <Link
      to={`/${query.placeName}/properties`}
      className="list-group-item list-group-item-action"
      key={query.id}
    >
      {query.longTitle}
    </Link>
  ));

const noRecents = (
  <div className="list-group-item text-center">No recent searches</div>
);

export const RecentSearchesList: React.FC<RecentSearchesListProps> = ({
  searches,
}) => {
  const recents = renderRecents(searches);
  return (
    <div className="row">
      <div className="col text-xs-center text-sm-center pb-2">
        <h3>Recent searches</h3>
        <div className="list-group mb-3">
          {recents.length ? recents : noRecents}
        </div>
      </div>
    </div>
  );
};
