import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FilmsList } from '../../components/films-list/films-list';
import GenreList from '../../components/genre-list/genre-list';
import Logo from '../../components/logo/logo';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { showMoreFilms } from '../../store/actions';
import { filterFilmsByGenre } from '../../store/logic';
import { AppScreenProps } from '../../types/types';

function MainPage ({promoFilm}: AppScreenProps): JSX.Element {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const numberOfShownFilms = useAppSelector((state) => state.shownFilms);
  const allFilms = useAppSelector(filterFilmsByGenre);
  const films = useAppSelector(filterFilmsByGenre).slice(0, numberOfShownFilms);
  const handleShowMore = () => {
    dispatch(showMoreFilms(numberOfShownFilms));
  };


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.src} alt={promoFilm.title} />
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
              <Link className="user-block__link" to={AppRoute.SignIn}>Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.src} alt={promoFilm.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.date}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(`/films/${promoFilm.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => navigate(AppRoute.MyList)}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">
                    {films.filter((film) => film.isFavourite === true).length}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList />

          <div className="catalog__films-list">
            <FilmsList films={films} />
          </div>

          <div className="catalog__more">
            {allFilms.length > films.length && <ShowMoreButton onClick={handleShowMore} />}
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

export default MainPage;
