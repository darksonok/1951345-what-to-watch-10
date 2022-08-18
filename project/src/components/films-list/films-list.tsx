import { Film, FilmProps } from '../../types/types';
import FilmCard from '../film-card/film-card';

function FilmsList({films}: FilmProps): JSX.Element {

  return (
    <>
      {films.map((film: Film) => {
        const keyValue = `${film.id}-${film.name}`;
        return (
          <FilmCard
            key={keyValue}
            film={film}
          />
        );}
      )}
    </>
  );
}

export {FilmsList};
