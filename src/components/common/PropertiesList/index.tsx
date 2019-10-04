import * as React from 'react';

import { PropertyItem } from '@app/types/property.types';
import { PropertiesListItem } from './PropertiesListItem';

interface PropertiesListProps {
  properties: Array<PropertyItem>;
}

const renderProperties = (properties: Array<PropertyItem>) =>
  properties.map(property => (
    <div className="col-xs-12 col-sm-4" key={property.id}>
      <PropertiesListItem property={property} />
    </div>
  ));

export const PropertiesList: React.FC<PropertiesListProps> = ({
  properties,
}: PropertiesListProps) => {
  return <div className="row">{renderProperties(properties)}</div>;
};
