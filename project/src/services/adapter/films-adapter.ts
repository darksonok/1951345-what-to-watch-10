import { FilmFromServer } from '../../types/api-types';
import { Film } from '../../types/types';

export const filmsAdapter = (filmFromServer: FilmFromServer) => {
  const film = {
    title: filmFromServer.name,
    src: filmFromServer.posterImage,
    date: filmFromServer.released,
    url: filmFromServer.videoLink,
    ...filmFromServer
  };

  delete film['name'];
  delete film['posterImage'];
  delete film['released'];
  delete film['videoLink'];


  return film as Film;
};
