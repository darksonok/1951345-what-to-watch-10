import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmCardProps } from '../../types/types';

function FilmCard({ film }: FilmCardProps): JSX.Element {

  const [isUnderMouse, setActiveCard] = useState(false);

  const navigate = useNavigate();

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setActiveCard(true)}
      onMouseOut={() => setActiveCard(false)}
      onClick={() => navigate(`/films/${film.id}`)}
    >
      <div className="small-film-card__image">
        {
          isUnderMouse ?
            <span>Тут потом будет воспроизводится видео</span> :
            <img src={film.src} alt={film.title} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.title}</a>
      </h3>
    </article>
  );}

export default FilmCard;
