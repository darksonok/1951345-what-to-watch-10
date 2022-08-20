import { useState } from 'react';
import { TABS } from '../../const';
import { TabsProps } from '../../types/types';
import Details from './details/details';
import Overview from './overview/overview';

function Tabs({openedFilm}: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(TABS.OVERVIEW);
  const renderSwitch = (tab: string) => {
    const totalRating = (openedFilm.rating).toFixed(1);
    switch(true){
      case (tab === TABS.OVERVIEW):
        return (
          <Overview openedFilm={openedFilm} totalRating={totalRating} />
        );
      case (tab === TABS.DETAILS):
        return (
          <Details openedFilm={openedFilm} />
        );
      case (tab === TABS.REVIEWS):
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.keys(TABS).map((tab:string) => (
            <li key={TABS[tab]} className={`film-nav__item ${selectedTab === TABS[tab] ? 'film-nav__item--active' : '' }`}>
              <span
                className="film-nav__link"
                onClick={() => setSelectedTab(TABS[tab])}
              >
                {TABS[tab]}
              </span>
            </li>
          ))}
        </ul>
      </nav>
      {renderSwitch(selectedTab)}
    </div>
  );
}

export default Tabs;
