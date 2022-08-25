import { Link } from 'react-router-dom';
import { Film } from '../../types/types';

type AddReviewBreadcrumbsProps = {
  openedFilm: Film
}

function AddReviewBreadcrumbs ({openedFilm}: AddReviewBreadcrumbsProps ) {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link
            className="breadcrumbs__link"
            to={`/films/${openedFilm.id}`}
          >
            {openedFilm.name}
          </Link>
        </li>
        <li className="breadcrumbs__item">
          <Link
            className="breadcrumbs__link"
            to={''}
          >
                  Add review
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default AddReviewBreadcrumbs;
