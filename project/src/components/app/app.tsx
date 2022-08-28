import { Route, Routes } from 'react-router-dom';
import { AppRoute, SERVER_BROKEN_STATUS_ERROR_LOWER_THRESHOLD } from '../../const';
import { useAppSelector } from '../../hooks';
import AddReview from '../../pages/add-review/add-review';
import Authorization from '../../pages/authorization/authorization';
import Favourites from '../../pages/favourites/favourites';
import MainPage from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import browserHistory from '../../services/browser-history';
import { getErrorCode, getLoadingStatus } from '../../store/selectors';
import HistoryRouter from '../history-route/history-route';
import PrivateRoute from '../private-route/private-route';
import ServerUnavailabe from '../server-unavailable/server-unavailable';
import Spinner from '../spinner/spinner';

function App(): JSX.Element {

  const isLoading = useAppSelector(getLoadingStatus);
  const errorCode = useAppSelector(getErrorCode);

  if (isLoading) {
    return (
      errorCode !== null && errorCode >= SERVER_BROKEN_STATUS_ERROR_LOWER_THRESHOLD
        ? <ServerUnavailabe />
        : <Spinner />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <Favourites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <MoviePage />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReview />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<Authorization />}
        />
        <Route
          path={AppRoute.Player}
          element={
            <Player />
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
