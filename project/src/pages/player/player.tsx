import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import VideoPlayerControls from '../../components/video-player-controls/video-player-controls';
import { fetchChosenFilm } from '../../services/api';
import { Film } from '../../types/types';
import { humanizeTime } from '../../utils';

function Player() {
  const { id } = useParams();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [openedFilm, setOpenedFilm] = useState({} as Film);
  const [isOpenedFilmLoading, setOpenedFilmLoadingStatus] = useState(true);
  const [isVideoPlaying, setVideoPlayingStatus] = useState(true);
  const [videoDuration, setVideoDuration] = useState('');
  const [videoProcessPosition, setVideoProcessPosition] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchChosenFilm(Number(id), setOpenedFilmLoadingStatus, setOpenedFilm, navigate);
  }, [id, navigate]);

  const pauseVideo = () => {
    setVideoPlayingStatus(false);
    videoRef.current?.pause();
  };

  const playVideo = () => {
    setVideoPlayingStatus(true);
    videoRef.current?.play();
  };

  const onPlayButtonClick = () => {
    if(videoRef.current === null) {
      return null;
    }
    isVideoPlaying
      ? pauseVideo()
      : playVideo ();
  };

  const onFullScreenButtonClick = () => {
    if(videoRef.current === null) {
      return null;
    }
    videoRef.current.requestFullscreen();
  };

  const getVideoEstimateTime = () => (
    Math.floor(Number(videoRef.current?.duration))
    -
    Math.floor(Number(videoRef.current?.currentTime)));

  const getVieoProgress = () => {
    if (videoRef.current === null) {
      return 0;
    }
    return Number(videoRef.current?.buffered.end(0))
           / (Number(videoRef.current?.duration))
           * 100;
  };

  const getVideoProcessPosition = () => {
    if (videoRef.current === null) {
      return 0;
    }
    return Number(videoRef.current?.currentTime)
           / (Number(videoRef.current?.duration))
           * 100 ;
  };


  return (
    isOpenedFilmLoading
      ? <Spinner />
      :
      <div className="player">
        <video
          src={openedFilm.videoLink}
          className="player__video"
          poster={openedFilm.backgroundImage}
          ref={videoRef}
          autoPlay
          onCanPlay={() => setVideoDuration(humanizeTime(getVideoEstimateTime()))}
          onTimeUpdate={() => {
            setVideoDuration(humanizeTime(getVideoEstimateTime()));
            setVideoProcessPosition(getVideoProcessPosition);
            setVideoProgress(getVieoProgress);
          } }
        >
        </video>

        <button
          type="button"
          className="player__exit"
          onClick={() => navigate(`/films/${id}`)}
        >
          Exit
        </button>
        <VideoPlayerControls
          videoProgress={videoProgress}
          videoProcessPosition={videoProcessPosition}
          videoDuration={videoDuration}
          onPlayButtonClick={onPlayButtonClick}
          isVideoPlaying={isVideoPlaying}
          onFullScreenButtonClick={onFullScreenButtonClick}
        />
      </div>
  );
}

export default Player;
