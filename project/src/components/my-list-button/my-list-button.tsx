import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { addToFavorites } from '../../services/api';
import { getAuthorizationStatus, getFavoriteFilms } from '../../store/selectors';
import { Film } from '../../types/types';

type MyListButtonProps = {
  id?: number,
}

function MyListButton ({ id }: MyListButtonProps): JSX.Element {
  const allFavoritesFilms = useAppSelector(getFavoriteFilms);
  const [isFilmFavorite, setFilmFavorite] = useState(false);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if(allFavoritesFilms.filter((film: Film) => film.id === id).length > 0){
      setFilmFavorite(true);
    } else {
      setFilmFavorite(false);
    }
  }, [allFavoritesFilms, id]);

  const navigate = useNavigate();

  const onMyListClick = () => {
    if(id === undefined) {
      return null;
    }
    isFilmFavorite
      ? addToFavorites(id, 0, setFilmFavorite)
      : addToFavorites(id, 1, setFilmFavorite);
  };

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ?
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={() => navigate(AppRoute.SignIn)}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFilmFavorite
            ? <use xlinkHref="#in-list"></use>
            : <use xlinkHref="#add"></use>}

        </svg>
        <span>You need to authorize</span>
      </button>
      :
      <button
        className="btn btn--list film-card__button"
        type="button"
        onClick={onMyListClick}
      >
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFilmFavorite
            ? <use xlinkHref="#in-list"></use>
            : <use xlinkHref="#add"></use>}

        </svg>
        <span>My list</span>
        <span className="film-card__count">
          {allFavoritesFilms.length}
        </span>
      </button>
  );
}

export default MyListButton;

