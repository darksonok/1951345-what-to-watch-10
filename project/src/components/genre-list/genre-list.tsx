import { useDispatch } from 'react-redux';
import { MAX_GENRES_TO_SHOW } from '../../const';
import { useAppSelector } from '../../hooks';
import { changeGenreAction } from '../../store/actions';
import { getActiveGenre, getGenres } from '../../store/selectors';
import Genre from '../genre/genre';

function GenreList (): JSX.Element {

  const activeGenre = useAppSelector(getActiveGenre);
  const genres = useAppSelector(getGenres);

  const dispatch = useDispatch();

  const changeGenreHandler = (genre: string) => {
    dispatch(changeGenreAction(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.slice(0,MAX_GENRES_TO_SHOW).map((genre) => (
        <Genre
          key={genre}
          genre={genre}
          activeGenre={activeGenre}
          onGenreClick={changeGenreHandler}
        />
      ))}
    </ul>
  );
}

export default GenreList;
