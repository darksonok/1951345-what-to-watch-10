import { useState } from 'react';
import { TABS } from '../../const';
import { TabsProps } from '../../types/types';
import { huminizaRAting } from '../../utils';

function Tabs({openedFilm}: TabsProps) {

  const [selectedTab, setSelectedTab] = useState(TABS.OVERVIEW);
  const renderSwitch = (tab: string) => {
    const totalRating = (openedFilm.reviews.reduce((r,i) => r + i.rating, 0) / (openedFilm.reviews.length || 1)).toFixed(1);
    switch(true){
      case (tab === TABS.OVERVIEW):
        return (
          <>
            <div className="film-rating">
              <div className="film-rating__score">
                {totalRating}
              </div>
              <p className="film-rating__meta">
                <span className="film-rating__level">{huminizaRAting(Number(totalRating))}</span>
                <span className="film-rating__count">{openedFilm.reviews.length} Ratings</span>
              </p>
            </div>
            <div className="film-card__text">
              <p>{openedFilm.description} </p>
              <p className="film-card__director"><strong>{openedFilm.director}</strong></p>
              <p className="film-card__starring"><strong>{openedFilm.staring}</strong></p>
            </div>
          </>
        );
      case (tab === TABS.DETAILS):
        return (
          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Director</strong>
                <span className="film-card__details-value">{openedFilm.director}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Starring</strong>
                <span className="film-card__details-value">
                  {openedFilm.staring }
                </span>
              </p>
            </div>

            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Run Time</strong>
                <span className="film-card__details-value">{openedFilm.runTime} m</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Genre</strong>
                <span className="film-card__details-value">{openedFilm.genre}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Released</strong>
                <span className="film-card__details-value">{openedFilm.date}</span>
              </p>
            </div>
          </div>
        );
      case (tab === TABS.REVIEWS):
        return (
          <div className="film-card__reviews film-card__row">
            <div className="film-card__reviews-col">
              {openedFilm.reviews.map((review) => (
                <div key={review.id} className="review">
                  <blockquote className="review__quote">
                    <p className="review__text">{review.text}</p>
                    <footer className="review__details">
                      <cite className="review__author">{review.author}</cite>
                      <time className="review__date" dateTime={review.date}>{review.date}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${selectedTab === TABS.OVERVIEW ? 'film-nav__item--active' : '' }`}>
            <span
              className="film-nav__link"
              onClick={() => setSelectedTab(TABS.OVERVIEW)}
            >
                Overview
            </span>
          </li>
          <li className={`film-nav__item ${selectedTab === TABS.DETAILS ? 'film-nav__item--active' : '' }`}>
            <span
              className="film-nav__link"
              onClick={() => setSelectedTab(TABS.DETAILS)}
            >
              Details
            </span>
          </li>
          <li className={`film-nav__item ${selectedTab === TABS.REVIEWS ? 'film-nav__item--active' : '' }`}>
            <span
              className="film-nav__link"
              onClick={() => setSelectedTab(TABS.REVIEWS)}
            >
              Reviews
            </span>
          </li>
        </ul>
      </nav>
      {renderSwitch(selectedTab)}
    </div>
  );
}

export default Tabs;
