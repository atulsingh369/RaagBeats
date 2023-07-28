import Home from "../Pages/Home";
import Search from "../Pages/Search";
import Like from "../Pages/Like";
import Player from "../Pages/Player";
import Folder from "../Pages/Folder";
import Setting from "../Pages/Setting";

const Content = ({ home, search, like, player, folder, setting }) => {
  return (
    <>
      <div className="bg-transparent mb-48 w-10/12 md:w-full rounded-xl flex flex-wrap justify-evenly items-center overflow-y-scroll">
        {home && <Home />}
        {search && <Search />}
        {like && <Like />}
        {player && <Player />}
        {folder && <Folder />}
        {setting && <Setting />}
      </div>
    </>
  );
};

export default Content;
