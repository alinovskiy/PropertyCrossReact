import * as React from 'react';
import { Link } from 'react-router-dom';

import { PropertyItem } from '@app/types/property.types';

interface PropertiesListItemProps {
  property: PropertyItem;
}

export const PropertiesListItem: React.FC<PropertiesListItemProps> = ({
  property,
}: PropertiesListItemProps) => (
  <div className="card mb-3">
    <Link to={`/${property.location.placeName}/properties/${property.id}`}>
      <img
        src={property.imgUrl}
        className="card-img-top"
        alt={property.title}
      />
    </Link>
    <div className="card-block">
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <h6>{property.priceFormatted}</h6>
      </div>
    </div>
    <div className="card-footer">
      <div className="row">
        <div className="col-xs-12 col-sm-10">
          <small className="text-muted">
            Updated: {property.updatedInDaysFormatted}
          </small>
        </div>
      </div>
    </div>
  </div>
);
