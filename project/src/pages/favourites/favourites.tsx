import { FilmsList } from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/selectors';

function Favourites(): JSX.Element {
  const favouriteFilms = useAppSelector(getFavoriteFilms);

  return (
    <div className="user-page">
      <Header className='user-page__head'/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <FilmsList films={favouriteFilms} />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Favourites;
