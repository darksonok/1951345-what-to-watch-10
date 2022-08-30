import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import VideoPlayerControls from '../../components/video-player-controls/video-player-controls';
import { DEFAULT_VIDEO_PARAM_VALUE, MathActions, VideoParams } from '../../const';
import { controller, fetchChosenFilm } from '../../services/api';
import { Film } from '../../types/types';
import { humanizeTime, mesureVideoOptions } from '../../utils';

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
    return (() => controller.abort());
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
    if (videoRef.current === null) {
      return null;
    }
    isVideoPlaying
      ? pauseVideo()
      : playVideo ();
  };

  const onFullScreenButtonClick = () => {
    if (videoRef.current === null) {
      return null;
    }
    videoRef.current.requestFullscreen();
  };

  const getVideoParams = (param: string) => {
    switch(true) {
      case param === VideoParams.ESTIMATE_TIME:
        return mesureVideoOptions(videoRef.current?.duration, videoRef.current?.currentTime, MathActions.MINUS);
      case param === VideoParams.VIDEO_PROGRESS:
        return mesureVideoOptions(videoRef.current?.buffered.end(0), videoRef.current?.duration, MathActions.DIVIDE);
      case param === VideoParams.VIDEO_PROCESS_POSITION:
        return mesureVideoOptions(videoRef.current?.currentTime, videoRef.current?.duration, MathActions.DIVIDE);
      default:
        return DEFAULT_VIDEO_PARAM_VALUE;
    }
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
          onCanPlay={() => setVideoDuration(humanizeTime(getVideoParams(VideoParams.ESTIMATE_TIME)))}
          onTimeUpdate={() => {
            setVideoDuration(humanizeTime(getVideoParams(VideoParams.ESTIMATE_TIME)));
            setVideoProcessPosition(getVideoParams(VideoParams.VIDEO_PROCESS_POSITION));
            setVideoProgress(getVideoParams(VideoParams.VIDEO_PROGRESS));
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
