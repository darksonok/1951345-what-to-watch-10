import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getPromoFilm } from '../../store/selectors';
import { Film } from '../../types/types';
import Header from '../header/header';
import MyListButton from '../my-list-button/my-list-button';

function PromoFilmComponent (): JSX.Element {
  const promoFilm: Film | null = useAppSelector(getPromoFilm);
  const navigate = useNavigate();

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header className='film-card__head'/>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm?.genre}</span>
              <span className="film-card__year">{promoFilm?.released}</span>
            </p>

            <div className="film-card__buttons">
              <button
                className="btn btn--play film-card__button"
                type="button"
                onClick={() => navigate(`/player/${promoFilm?.id}`)}
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <MyListButton id={promoFilm?.id}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoFilmComponent;
