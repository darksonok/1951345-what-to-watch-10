import { useEffect, useState } from 'react';
import { NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE } from '../../const';
import { fetchSimilarFilms } from '../../services/api';
import { Film } from '../../types/types';
import { FilmsList } from '../films-list/films-list';
import Spinner from '../spinner/spinner';

type SimilarFilmsListProps = {
  id: number,
}

function SimilarFilmsList ({ id }: SimilarFilmsListProps): JSX.Element {
  const [isSimilarFilmsLoading, setSimilarFilmsLoadingStatus] = useState(true);
  const [similarFilms, setSimilarFilms] = useState({} as Film[]);
  useEffect(() => {
    fetchSimilarFilms(Number(id), setSimilarFilmsLoadingStatus, setSimilarFilms);
  }, [id]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <div className="catalog__films-list">
        {isSimilarFilmsLoading
          ? <Spinner />
          : <FilmsList films={similarFilms.slice(0,NUMBER_OF_SIMILAR_FILMS_IN_FILM_PAGE)}/>}
      </div>
    </section>
  );
}

export default SimilarFilmsList;
