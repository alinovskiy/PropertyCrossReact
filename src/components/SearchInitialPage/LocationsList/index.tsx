import * as React from 'react';
import { Link } from 'react-router-dom';

import { AddQueryAction } from '@app/store/recents/actions';
import { ResetSearchAction } from '@app/store/locations/actions';
import { PropertiesLocation } from '@app/types/locations.types';

interface LocationsListProps {
  locations: Array<PropertiesLocation>;
  addQuery: (location: PropertiesLocation) => AddQueryAction;
  resetSearch: () => ResetSearchAction;
}

export class LocationsList extends React.Component<LocationsListProps> {
  handleLocationClick = (location: PropertiesLocation) => () => {
    this.props.addQuery(location);
    this.props.resetSearch();
  };

  renderLocations = () =>
    this.props.locations.map(location => (
      <Link
        to={`/${location.placeName}/properties`}
        className="list-group-item list-group-item-action"
        key={location.id}
        onClick={this.handleLocationClick(location)}
      >
        {location.longTitle}
      </Link>

    ));

  render() {
    return (
      <>
        <div className="row">
          <div className="col text-xs-center text-sm-center pb-2">
            <h3>Available locations</h3>
          </div>
        </div>
        <div className="list-group mb-3">{this.renderLocations()}</div>
      </>
    );
  }
}
