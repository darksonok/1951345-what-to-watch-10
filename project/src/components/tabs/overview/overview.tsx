import { OverviewProps } from '../../../types/types';
import { huminizaRAting } from '../../../utils';


function Overview ({openedFilm, totalRating} : OverviewProps) {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {totalRating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{huminizaRAting(Number(totalRating))}</span>
          <span className="film-rating__count">{openedFilm.scoresCount} Ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{openedFilm.description} </p>
        <p className="film-card__director"><strong>{openedFilm.director}</strong></p>
        <p className="film-card__starring"><strong>{openedFilm.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}

export default Overview;
