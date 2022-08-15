import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { PromoFilm } from './const';
import { films } from './mock/films';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilm={PromoFilm}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
);
