import AddReviewBreadcrumbs from '../../components/add-review-form/add-review-breadcrumbs';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Header from '../../components/header/header';
import { FilmProps } from '../../types/types';

function AddReview({films}: FilmProps) {
  const id: number = parseInt(window.location.pathname.split('/')[2], 10);
  const openedFilm = films.filter((film) => film.id === id)[0];

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={openedFilm.backgroundImage} alt={openedFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header breadcrumbs={<AddReviewBreadcrumbs openedFilm={openedFilm}/>} />

        <div className="film-card__poster film-card__poster--small">
          <img src={openedFilm.posterImage} alt={openedFilm.name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
