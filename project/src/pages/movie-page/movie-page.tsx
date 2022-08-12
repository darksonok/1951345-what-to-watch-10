import { Link, useNavigate } from 'react-router-dom';
import FilmCard from '../../components/film-card/film-card';
import Logo from '../../components/logo/logo';
import Tabs from '../../components/tabs/tabs';
import { AppRoute, NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE } from '../../const';
import { Film, FilmProps } from '../../types/types';

function MoviePage({films}: FilmProps) {
  const id: number = parseInt(window.location.pathname.split('/')[2], 10);
  const openedFilm = films.filter((film) => film.id === id)[0];
  const navigate = useNavigate();
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={openedFilm.src} alt={openedFilm.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <Link
                  className="user-block__link"
                  to={AppRoute.SignIn}
                >
                  Sign out
                </Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{openedFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{openedFilm.genre}</span>
                <span className="film-card__year">{openedFilm.date}</span>
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
                <Link
                  to={`/films/${openedFilm.id}/review`}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={openedFilm.src} alt={openedFilm.title} width="218" height="327" />
            </div>
            <Tabs openedFilm={openedFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {films.filter((film) => film.genre === openedFilm.genre).slice(-NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE).map((film: Film) => {
              const keyValue = `${film.id}-${film.title}`;
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
