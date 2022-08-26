import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { fetchChosenFilm } from '../../services/api';
import { getAuthorizationStatus } from '../../store/selectors';
import { Film } from '../../types/types';
import Header from '../header/header';
import Spinner from '../spinner/spinner';
import Tabs from '../tabs/tabs';

type OpenedFilmInfoProps = {
  id: number,
}

function OpenedFilmInfo ({ id }: OpenedFilmInfoProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const [openedFilm, setOpenedFilm] = useState({} as Film);
  const [isFilmLoading, setFilmLoadingStatus] = useState(true);

  useEffect(() => {
    fetchChosenFilm(Number(id), setFilmLoadingStatus, setOpenedFilm, navigate);
    return (() => {setOpenedFilm({} as Film); setFilmLoadingStatus(true);});
  }, [id, navigate]);

  return (
    isFilmLoading
      ? <Spinner />
      :
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={openedFilm.backgroundImage} alt={openedFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header className={'film-card__head'}/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{openedFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{openedFilm.genre}</span>
                <span className="film-card__year">{openedFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(`/player/${openedFilm.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.NoAuth ?
                  <span className="btn film-card__button">You need to authorize to add reviews</span> :
                  <Link
                    to={`/films/${openedFilm.id}/review`}
                    className="btn film-card__button"
                  >
          Add review
                  </Link>}

              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={openedFilm.posterImage} alt={openedFilm.name} width="218" height="327" />
            </div>
            {!isFilmLoading &&
       openedFilm &&
       <Tabs openedFilm={openedFilm} />}
          </div>
        </div>
      </section>
  );
}

export default OpenedFilmInfo;
