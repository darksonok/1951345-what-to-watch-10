import { useEffect, useRef } from 'react';
import { VideoPlayerProps } from '../../types/types';

function VideoPreviewPlayer({ film }: VideoPlayerProps):JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current === null) {
        return;
      }

      videoRef.current.play();
    }, 1000);
  }, []);

  return(
    <video
      ref={videoRef}
      src={film.url}
      className="player__video"
      poster={film.src}
      muted
    /> );
}

export default VideoPreviewPlayer;
