type VideoPlayerControlsProps = {
  videoProgress: number,
  videoProcessPosition: number,
  videoDuration: string,
  onPlayButtonClick: () => null | undefined
  isVideoPlaying: boolean,
  onFullScreenButtonClick: () => null | undefined
}

function VideoPlayerControls ({
  videoProgress,
  videoProcessPosition,
  videoDuration,
  onPlayButtonClick,
  isVideoPlaying,
  onFullScreenButtonClick
}: VideoPlayerControlsProps): JSX.Element {
  return (
    <div className="player__controls">
      <div className="player__controls-row">
        <div className="player__time">
          <progress className="player__progress" value={videoProgress} max="100"></progress>
          <div
            className="player__toggler"
            style={{left :`${videoProcessPosition}%`}}
          >
          Toggler
          </div>
        </div>
        <div className="player__time-value">
          {videoDuration}
        </div>
      </div>

      <div className="player__controls-row">
        <button
          type="button"
          className="player__play"
          onClick={onPlayButtonClick}
        >
          <svg viewBox="0 0 19 19" width="19" height="19">
            {
              isVideoPlaying
                ? <use xlinkHref="#pause"></use>
                : <use xlinkHref="#play-s"></use>
            }

          </svg>
          <span>Play</span>
        </button>
        <div className="player__name">Transpotting</div>

        <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
          <svg viewBox="0 0 27 27" width="27" height="27">
            <use xlinkHref="#full-screen"></use>
          </svg>
          <span>Full screen</span>
        </button>
      </div>
    </div>
  );
}

export default VideoPlayerControls;
