import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import { fetchChosenFilm } from '../../services/api';
import { Film } from '../../types/types';

function Player() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openedFilm, setOpenedFilm] = useState({} as Film);
  const [isFilmLoading, setFilmLoadingStatus] = useState(true);

  useEffect(() => {
    fetchChosenFilm(Number(id), setFilmLoadingStatus, setOpenedFilm, navigate);
    return (() => {setOpenedFilm({} as Film); setFilmLoadingStatus(true);});
  }, [id, navigate]);

  return (
    isFilmLoading
      ? <Spinner />
      :
      <div className="player">
        <video src={openedFilm.videoLink} className="player__video" poster={openedFilm.backgroundImage}></video>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"></progress>
              <div className="player__toggler" >Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
  );
}

export default Player;
