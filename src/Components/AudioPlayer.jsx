import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

import "./style.scss";

const AudioPlayer = ({
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
}) => {
  return (
    <>
      <div className={`${!miniPlayer && "fixed bottom-0"} bg-secondary`}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div
          className={`flex text-2xl font-semibold bg-primary items-center border-white ${
            !miniPlayer
              ? "w-screen md:h-32 border-y-2 rounded-xl"
              : "flex-col border-2 p-2 space-y-6 rounded-box md:w-96"
          }`}>
          <DisplayTrack
            {...{
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
              miniPlayer,
              setHome,
              setSearch,
              setLike,
              setPlayer,
              setUser,
              setSetting,
              track,
              storeHeartList,
            }}
          />
          <Controls
            {...{
              audioRef,
              progressBarRef,
              duration,
              setTimeProgress,
              playList,
              trackIndex,
              setTrackIndex,
              handleNext,
              isPlaying,
              setIsPlaying,
              miniPlayer,
              setTrack,
            }}
          />
          <ProgressBar
            {...{
              progressBarRef,
              audioRef,
              timeProgress,
              duration,
              miniPlayer,
            }}
          />
        </div>
        <p
          className={`text-center text-lg md:text-xl font-semibold text-white ${
            miniPlayer && "hidden"
          }`}>
          Built with ❤️ By Atul Singh
        </p>
      </div>
    </>
  );
};
export default AudioPlayer;
