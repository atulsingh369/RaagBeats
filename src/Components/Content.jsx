import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Like from "../Pages/Like";
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
  isPlaying,
  setIsPlaying,
  token,
  setTrack,
  storeHeartList,
  setPlayList,
  favourites,
  setMiniPlayer,
  setLike,
  setUser,
  setSearch,
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
        {player && setMiniPlayer(true)}
        {user && <User {...{ setMiniPlayer, setLike, setUser, setSearch }} />}
        {setting && <Setting {...{ setMiniPlayer }} />}
      </div>
    </>
  );
};

export default Content;
