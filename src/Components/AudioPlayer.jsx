import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

import "./style.scss";

const AudioPlayer = ({
  player,
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
  heartList,
  storeHeartList,
  setTrack,
}) => {
  return (
    <>
      <div className={`${!player && "fixed bottom-0"} bg-secondary`}>
        <div
          className={`flex text-2xl font-semibold bg-primary text-white items-center border-white ${
            !player
              ? "w-screen md:h-32 border-y-2 rounded-xl"
              : "flex-col border-2 p-2 rounded-box md:w-96"
          }`}>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <DisplayTrack
            {...{
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
              player,
              setHome,
              setSearch,
              setLike,
              setPlayer,
              setUser,
              setSetting,
              track,
              heartList,
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
              player,
              setTrack,
            }}
          />
          <ProgressBar
            {...{ progressBarRef, audioRef, timeProgress, duration, player }}
          />
        </div>
        <p
          className={`text-center text-lg md:text-xl font-semibold text-white ${
            player && "hidden"
          }`}>
          Built with ❤️ By Atul Singh
        </p>
      </div>
    </>
  );
};
export default AudioPlayer;
