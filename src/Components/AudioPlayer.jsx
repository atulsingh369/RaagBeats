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
  favourites,
}) => {
  return (
    <>
      <div
        className={`${
          !miniPlayer
            ? "fixed bottom-0"
            : "absolute top-[50%] left-[50%] -translate-x-1/3 lg:-translate-x-1/2 -translate-y-1/2"
        }`}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div
          className={`flex text-2xl font-semibold bg-primary items-center border-white ${
            !miniPlayer
              ? "w-screen md:h-32 border-y-2 rounded-xl"
              : "flex-col border-2 lg:p-3 p-1 space-y-6 rounded-box w-64 lg:w-96"
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
              favourites,
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
