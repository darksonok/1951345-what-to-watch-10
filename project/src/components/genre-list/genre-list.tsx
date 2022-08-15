import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import { changeGenreAction } from '../../store/actions';
import { getGenres } from '../../store/logic';
import Genre from '../genre/genre';

function GenreList (): JSX.Element {

  const activeGenre = useAppSelector((state) => state.genre);
  const genres = useAppSelector(getGenres);

  const dispatch = useDispatch();

  const changeGenreHandler = (genre: string) => {
    dispatch(changeGenreAction(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
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
