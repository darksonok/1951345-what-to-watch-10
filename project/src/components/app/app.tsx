import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import AddReview from '../../pages/add-review/add-review';
import Authorization from '../../pages/authorization/authorization';
import Favourites from '../../pages/favourites/favourites';
import MainPage from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import { PromoFilmProps } from '../../types/types';
import PrivateRoute from '../private-route/private-route';

function App({title, genre, date, src}: PromoFilmProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              title={title}
              genre={genre}
              date={date}
              src={src}
            />
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <Favourites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={<MoviePage />}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        />
        <Route
          path={AppRoute.SignIn}
          element={<Authorization />}
        />
        <Route
          path={AppRoute.Player}
          element={<Player />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
