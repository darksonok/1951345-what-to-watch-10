import { useDispatch, useSelector } from 'react-redux';
import { FilmsList } from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import GenreList from '../../components/genre-list/genre-list';
import PromoFilmComponent from '../../components/promo-film/promo-film';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import { useAppSelector } from '../../hooks';
import { showMoreFilms } from '../../store/actions';
import { filterFilmsByGenre, getNumberOfShownFilms } from '../../store/selectors';

function MainPage (): JSX.Element {

  const dispatch = useDispatch();
  const numberOfShownFilms = useAppSelector(getNumberOfShownFilms);
  const allFilms = useSelector(filterFilmsByGenre);
  const shownFilms = useSelector(filterFilmsByGenre).slice(0, numberOfShownFilms);
  const handleShowMore = () => {
    dispatch(showMoreFilms(numberOfShownFilms));
  };

  return (
    <>
      <PromoFilmComponent />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList />
          <div className="catalog__films-list">
            <FilmsList films={shownFilms} />
          </div>
          <ShowMoreButton
            allFilmsLength={allFilms.length}
            shownFilmLength={shownFilms.length}
            onClick={handleShowMore}
          />
        </section>
        <Footer />
      </div>
    </>
  );

}

export default MainPage;
