import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const PromoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014,
  src: 'img/bg-the-grand-budapest-hotel.jpg'
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title={PromoFilm.title}
      genre={PromoFilm.genre}
      date={PromoFilm.date}
      src={(PromoFilm.src)}
    />
  </React.StrictMode>,
);
