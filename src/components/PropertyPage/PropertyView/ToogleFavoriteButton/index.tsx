import * as React from 'react';

interface ToggleFavoriteButtonProps {
  isFavorite: boolean;
  add: () => void;
  remove: () => void;
}

export const ToggleFavoritesButton: React.FC<ToggleFavoriteButtonProps> = ({
  isFavorite,
  add,
  remove,
}: ToggleFavoriteButtonProps) => {
  const buttonClasses = isFavorite ? 'btn btn-success' : 'btn btn-outline-dark';
  const clickHandler = isFavorite ? remove : add;
  return (
    <button className={buttonClasses} onClick={clickHandler}>
      <i className="fa fa-heart" />
      <span className="ml-2">Favorites</span>
    </button>
  );
};
