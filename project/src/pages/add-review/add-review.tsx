import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddReviewBreadcrumbs from '../../components/add-review-form/add-review-breadcrumbs';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Spinner from '../../components/spinner/spinner';
import { fetchChosenFilm } from '../../services/api';
import { Film } from '../../types/types';

function AddReview(): JSX.Element {
  const { id } = useParams();
  const [isFilmLoading, setFilmLoadingStatus] = useState(true);
  const [film, setFilm] = useState({} as Film);
  const navigate = useNavigate();
  fetchChosenFilm(Number(id), setFilmLoadingStatus, setFilm, navigate);

  return (
    isFilmLoading
      ? <Spinner />
      :
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header breadcrumbs={<AddReviewBreadcrumbs openedFilm={film}/>} />

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={film.name} width="218" height="327" />
          </div>
        </div>
        <AddReviewForm />
        <Footer />
      </section>
  );
}

export default AddReview;
