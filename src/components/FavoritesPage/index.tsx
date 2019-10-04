import * as React from 'react';

import { FavoritesStorage } from '@app/types/favorites.types';
import { PropertyItem } from '@app/types/property.types';
import { PropertiesList } from '@app/components/common/PropertiesList';

interface FavoritesPageProps {
  favorites: FavoritesStorage;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  favorites,
}: FavoritesPageProps) => {
  const favesList: Array<PropertyItem> = Object.values(favorites);
  return (
    <div className="container-fluid">
      <div className="text-center m-3">
        <h1>Favorites</h1>
        <h2>Total {favesList.length} items in favorites.</h2>
      </div>
      <PropertiesList properties={favesList} />
    </div>
  );
};
