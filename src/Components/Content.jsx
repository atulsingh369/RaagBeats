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
  storeHeartList,
  setPlayList,
  favourites,
  setHome,
  setSearch,
  setLike,
  setPlayer,
  setUser,
  setSetting,
  playList,
  track,
  miniPlayer,
  setMiniPlayer,
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
              storeHeartList,
              setPlayList,
              favourites,
              setMiniPlayer,
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
              favourites,
              setMiniPlayer,
            }}
          />
        )}
        {like && (
          <Like
            {...{
              token,
              favourites,
              setTrack,
              setIsPlaying,
              isPlaying,
              audioRef,
              setPlayList,
              storeHeartList,
              setMiniPlayer,
            }}
          />
        )}
        {player && (
          <Player
            {...{
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
            }}
          />
        )}
        {user && (
          <User
            {...{
              setMiniPlayer,
            }}
          />
        )}
        {setting && (
          <Setting
            {...{
              setMiniPlayer,
            }}
          />
        )}
      </div>
    </>
  );
};

export default Content;
