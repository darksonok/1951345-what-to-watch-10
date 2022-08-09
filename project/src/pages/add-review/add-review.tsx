import { Link } from 'react-router-dom';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import App from '../../components/app/app';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import { FilmProps } from '../../types/types';

function AddReview({films}: FilmProps) {
  const id: number = parseInt(window.location.pathname.split('/')[2], 10);
  const openedFilm = films.filter((film) => film.id === id)[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={openedFilm.src} alt={openedFilm.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Logo />
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={`/films/${openedFilm.id}`}
                >
                  {openedFilm.title}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  className="breadcrumbs__link"
                  to={''}
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

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

        <div className="film-card__poster film-card__poster--small">
          <img src={openedFilm.src} alt={openedFilm.title} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
