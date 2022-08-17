import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { PromoFilm } from './const';
import { store } from './store';
import { fetchFilmsAction } from './store/api-actions';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchFilmsAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilm={PromoFilm}
      />
    </Provider>
  </React.StrictMode>,
);
