import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FilmCardProps } from '../../types/types';
import VideoPreviewPlayer from '../video-preview-player/video-preview-player';

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
            <VideoPreviewPlayer
              film={film}
            /> :
            <img src={film.previewImage} alt={film.name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>
  );}

export default FilmCard;
