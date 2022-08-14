import { Link } from 'react-router-dom';
import { FilmsList } from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { Film, FilmProps } from '../../types/types';

function Favourites({films}: FilmProps) {
  const favouriteFilms: Film[] = films.filter((film) => film.isFavourite);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favouriteFilms.length}</span></h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={favouriteFilms} />
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
  );
}

export default Favourites;
