import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Like from "../Pages/Like";
import Player from "../Pages/Player";
import User from "../Pages/User";
import Setting from "../Pages/Setting";

const Content = ({
  home,
  search,
  like,
  player,
  user,
  setting,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  duration,
  setTimeProgress,
  trackIndex,
  setTrackIndex,
  isPlaying,
  setIsPlaying,
  timeProgress,
  token,
  setTrack,
  heartList,
  storeHeartList,
  setPlayList,
}) => {
  return (
    <>
      <div className="bg-transparent mb-48 w-10/12 md:w-full rounded-xl flex flex-wrap justify-evenly items-center overflow-y-scroll">
        {home && (
          <Home
            {...{
              token,
              setTrack,
              setIsPlaying,
              isPlaying,
              audioRef,
              heartList,
              storeHeartList,
              setPlayList,
            }}
          />
        )}
        {search && (
          <Search
            {...{
              token,
              setTrack,
              setIsPlaying,
              isPlaying,
              audioRef,
              setPlayList,
              storeHeartList,
              heartList,
            }}
          />
        )}
        {like && <Like />}
        {player && (
          <Player
            {...{
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
              duration,
              setTimeProgress,
              trackIndex,
              setTrackIndex,
              isPlaying,
              setIsPlaying,
              timeProgress,
            }}
          />
        )}
        {user && <User />}
        {setting && <Setting />}
      </div>
    </>
  );
};

export default Content;
