import {
  IoHome,
  IoSearch,
  IoMusicalNotes,
  IoFolder,
  IoHeart,
  IoSettingsSharp,
} from "react-icons/io5";

const SideBar = ({
  setHome,
  setSearch,
  setLike,
  setPlayer,
  setFolder,
  setSetting,
  home,
  search,
  like,
  player,
  folder,
  setting,
}) => {
  const setArray = [
    setHome,
    setSearch,
    setLike,
    setPlayer,
    setFolder,
    setSetting,
  ];

  const handleClickIcons = (e) => {
    for (let i = 0; i < setArray.length; ++i) {
      e !== i && setArray[i](false);
      setArray[e](true);
    }
  };

  return (
    <>
      <div className="border-r-2 border-r-white bg-primary h-screen w-2/12 md:w-max rounded-xl flex flex-col items-center flex-wrap overflow-hidden">
        <div className="h-3/4 md:h-5/6 flex flex-col justify-evenly items-center">
          <IoHome
            title="Home"
            onClick={() => handleClickIcons(0)}
            className={`text-2xl md:text-4xl md:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              home && "text-icons"
            }`}
          />
          <IoSearch
            title="Search"
            onClick={() => handleClickIcons(1)}
            className={`text-2xl md:text-4xl md:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              search && "text-icons"
            }`}
          />
          <IoHeart
            title="Favourites"
            onClick={() => handleClickIcons(2)}
            className={`text-2xl md:text-4xl md:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              like && "text-icons"
            }`}
          />
          <IoMusicalNotes
            title="Player"
            onClick={() => handleClickIcons(3)}
            className={`text-2xl md:text-4xl md:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              player && "text-icons"
            }`}
          />
          <IoFolder
            title="Files"
            onClick={() => handleClickIcons(4)}
            className={`text-2xl md:text-4xl md:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              folder && "text-icons"
            }`}
          />
          <IoSettingsSharp
            title="Settings"
            onClick={() => handleClickIcons(5)}
            className={`text-2xl md:text-4xl md:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              setting && "text-icons"
            }`}
          />
          <a
            href="https://atulsingh369.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <img
              title="Developer"
              src="https://ik.imagekit.io/xji6otwwkb/Portfolio/android-chrome-512x512.png?updatedAt=1689898722189"
              alt="Developer"
              className="h-12 w-12 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default SideBar;
