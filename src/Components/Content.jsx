import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Like from "../Pages/Like";
import Player from "../Pages/Player";
import User from "../Pages/User";
import Setting from "../Pages/Setting";

const Content = ({
  favourites,
  setFavourites,
  home,
  search,
  like,
  player,
  user,
  setting,
}) => {
  return (
    <>
      <div className="bg-transparent mb-48 w-10/12 md:w-full rounded-xl flex flex-wrap justify-evenly items-center overflow-y-scroll">
        {home && <Home />}
        {search && <Search />}
        {like && <Like />}
        {player && (
          <Player
            {...{
              favourites,
              setFavourites,
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
