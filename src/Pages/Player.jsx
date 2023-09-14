import AudioPlayer from "../Components/AudioPlayer";
import { Fade } from "react-awesome-reveal";

const Player = ({
  setHome,
  setSearch,
  setLike,
  setPlayer,
  setUser,
  setSetting,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  duration,
  setTimeProgress,
  playList,
  trackIndex,
  setTrackIndex,
  isPlaying,
  setIsPlaying,
  timeProgress,
  track,
  storeHeartList,
  setTrack,
  miniPlayer,
  setMiniPlayer,
}) => {
  setMiniPlayer(true);

  return (
    <>
      <div className="flex justify-center items-center rounded-xl md:my-0 m-5">
        <Fade direction="up">
          <AudioPlayer
            {...{
              miniPlayer,
              setHome,
              setSearch,
              setLike,
              setPlayer,
              setUser,
              setSetting,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
              duration,
              setTimeProgress,
              playList,
              trackIndex,
              setTrackIndex,
              isPlaying,
              setIsPlaying,
              timeProgress,
              track,
              storeHeartList,
              setTrack,
            }}
          />
        </Fade>
      </div>
    </>
  );
};

export default Player;
