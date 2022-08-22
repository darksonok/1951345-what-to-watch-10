import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import AddReview from '../../pages/add-review/add-review';
import Authorization from '../../pages/authorization/authorization';
import Favourites from '../../pages/favourites/favourites';
import MainPage from '../../pages/main/main';
import MoviePage from '../../pages/movie-page/movie-page';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import PrivateRoute from '../private-route/private-route';
import Spinner from '../spinner/spinner';

function App(): JSX.Element {

  const {films, isLoading} = useAppSelector((state) => state);

  if(isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <BrowserRouter>
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
              <Favourites
                films={films}
              />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Film}
          element={
            <MoviePage
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={
            <AddReview
              films={films}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<Authorization />}
        />
        <Route
          path={AppRoute.Player}
          element={
            <Player
              films={films}
            />
          }
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
