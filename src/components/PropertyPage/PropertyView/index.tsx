import * as React from 'react';

import { PropertyItem } from '@app/types/property.types';
import {
  AddToFavoritesAction,
  RemoveFromFavoritesAction,
} from '@app/store/favorites/actions';
import { Spinner } from '@app/components/common/Spinner';
import { FavoritesStorage } from '@app/types/favorites.types';
import { ToggleFavoritesButton } from './ToogleFavoriteButton';

export interface PropertyViewProps {
  property: PropertyItem;
  favorites: FavoritesStorage;
  addToFavorites: (property: PropertyItem) => AddToFavoritesAction;
  removeFromFavorites: (propertyId: string) => RemoveFromFavoritesAction;
}

export const PropertyView: React.FC<PropertyViewProps> = ({
  property,
  favorites,
  addToFavorites,
  removeFromFavorites,
}: PropertyViewProps) => {
  if (property) {
    const isFavorite = favorites.hasOwnProperty(property.id);
    return (
      <>
        <section className="jumbotron">
          <div className="row">
            <div className="col-xs-12 col-sm-4 text-center">
              <img
                className="img-fluid rounded"
                src={property.imgUrl}
                alt={property.title}
              />
            </div>
            <div className="col-xs-12 col-sm-8">
              <h1 className="display-4">{property.title}</h1>
              <h2 className="display-5">{property.location.longTitle}</h2>
              <p className="lead">{property.summary}</p>
              <h3>
                <span className="badge badge-primary text-wrap">
                  {property.priceFormatted}
                </span>
              </h3>
              <hr className="my-4" />
              <p>Updated: {property.updatedInDaysFormatted}</p>
              <ToggleFavoritesButton
                isFavorite={isFavorite}
                add={() => addToFavorites(property)}
                remove={() => removeFromFavorites(property.id)}
              />
            </div>
          </div>
        </section>
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td>Bathrooms</td>
                  <td className="text-center">{property.bathroomNumber}</td>
                </tr>
                <tr>
                  <td>Bedrooms</td>
                  <td className="text-center">{property.bedroomNumber}</td>
                </tr>
                <tr>
                  <td>Car spaces</td>
                  <td className="text-center">{property.carSpaces}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  return <Spinner />;
};
