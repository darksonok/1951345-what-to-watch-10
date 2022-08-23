import { StatusCodes } from 'http-status-codes';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import { APIRoute, AppRoute, AuthorizationStatus, NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE } from '../../const';
import { useAppSelector } from '../../hooks';
import api from '../../services/api';
import { Film } from '../../types/types';

function MoviePage() {
  const id: number = parseInt(window.location.pathname.split('/')[2], 10);
  const [openedFilm, setOpenedFilm] = useState({} as Film);
  const [isFilmLoading, setFilmLoadingStatus] = useState(true);
  const [isSimilarFilmsLoading, setSimilarFilmsLoadingStatus] = useState(true);
  const [similarFilms, setSimilarFilms] = useState({} as Film[]);
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  useEffect(() => {

    const fetchChosenFilm = async () => {
      await api.get<Film>(`${APIRoute.Films}/${id}`)
        .then( ({data}) => {
          setFilmLoadingStatus(false);
          setOpenedFilm(data);
        },
        (error) => {
          if (error.response.status === StatusCodes.NOT_FOUND) {
            navigate(AppRoute.NotFound);
          }
        }
        );
    };
    const fetchSimilarFilms = async () => {
      await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`)
        .then( ({data}) => {
          setSimilarFilms(data);
          setSimilarFilmsLoadingStatus(false);
        });
    };
    fetchSimilarFilms();
    fetchChosenFilm();
    return (() => {setOpenedFilm({} as Film); setFilmLoadingStatus(true);});
  }, [id, navigate]);

  if (isFilmLoading || isSimilarFilmsLoading) {
    return (
      <p>Loading data</p>
    );
  }


  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={openedFilm.backgroundImage} alt={openedFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

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

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {similarFilms.slice(0,NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE).map((film: Film) => {
              const keyValue = `${film.id}-${film.name}`;
              return (
                <FilmCard
                  key={keyValue}
                  film={film}
                />
              );}
            )}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Logo />
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
