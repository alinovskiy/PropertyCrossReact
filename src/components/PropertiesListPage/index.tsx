import * as React from 'react';
import { compose } from 'recompose';
import { match } from 'react-router';

import { PropertyItem } from '@app/types/property.types';
import {
  GetPropertiesAction,
  ResetPropertiesAction,
} from '@app/store/properties/actions';
import { WithInfiniteScroll } from '../hocs/withInfiniteScroll';
import { WithLoading } from '../hocs/withLoading';
import { PropertiesList } from '../common/PropertiesList';

import { PropertiesLocation } from '@app/types/locations.types';

interface RouteParams {
  placeName: string;
}

export interface PropertiesListPageProps {
  properties: Array<PropertyItem>;
  loading: boolean;
  page: number;
  hasMore: boolean;
  placeName: string;
  totalResults: number;
  location: PropertiesLocation;
  getProperties: (placeName: string, page: number) => GetPropertiesAction;
  resetProperties: () => ResetPropertiesAction;
  match: match<RouteParams>;
}

const ListWithLoadingWithInfiniteScroll = compose<PropertiesListPageProps, any>(
  WithInfiniteScroll,
  WithLoading
)(PropertiesList);

export class PropertiesListPage extends React.Component<PropertiesListPageProps> {
  componentDidMount(): void {
    const { placeName } = this.props.match.params;
    const { page } = this.props;
    this.props.getProperties(placeName, page + 1);
  }

  getProperties = () => {
    const { placeName } = this.props.match.params;
    const { page } = this.props;
    this.props.getProperties(placeName, page + 1);
  };

  componentWillUnmount(): void {
    this.props.resetProperties();
  }

  render() {
    const {
      location,
      properties,
      hasMore,
      page,
      loading,
      totalResults,
    } = this.props;
    return (
      <div className="container-fluid">
        <div className="text-center m-3">
          <h1>{location ? location.longTitle : ''}</h1>
          <h2>
            Displaying {properties.length} of {totalResults} items.
          </h2>
        </div>
        <ListWithLoadingWithInfiniteScroll
          properties={properties}
          hasMore={hasMore}
          page={page}
          getData={this.getProperties}
          isLoading={loading}
        />
      </div>
    );
  }
}
