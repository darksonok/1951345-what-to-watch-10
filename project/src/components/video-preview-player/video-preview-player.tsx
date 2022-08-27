import { useEffect, useRef } from 'react';
import { VIDEO_PREVIEW_DELAY } from '../../const';
import { VideoPlayerProps } from '../../types/types';


function VideoPreviewPlayer({ film }: VideoPlayerProps):JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playFilmPreview = () => {
    if (videoRef.current === null) {
      return;
    }
    videoRef.current.play();
  };

  useEffect(() => {
    const timeoutId = setTimeout(playFilmPreview, VIDEO_PREVIEW_DELAY);
    return (() => {
      clearTimeout(timeoutId);
    });
  });

  return (
    <video
      ref={videoRef}
      src={film.previewVideoLink}
      className="player__video"
      poster={film.previewImage}
      muted
    />
  );
}

export default VideoPreviewPlayer;
