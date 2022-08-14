import { GenreProps } from '../../types/types';


function Genre ({genre, activeGenre, onGenreClick} : GenreProps): JSX.Element {

  return (
    <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}>
      <span
        className="catalog__genres-link"
        onClick={() => onGenreClick(genre)}
      >
        {genre}
      </span>
    </li>
  );
}

export default Genre;
