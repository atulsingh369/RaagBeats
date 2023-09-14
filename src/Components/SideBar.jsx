import {
  IoHome,
  IoSearch,
  IoMusicalNotes,
  IoHeart,
  IoPerson,
  IoSettingsSharp,
} from "react-icons/io5";

const SideBar = ({
  setHome,
  setSearch,
  setLike,
  setPlayer,
  setUser,
  setSetting,
  home,
  search,
  like,
  player,
  user,
  setting,
  miniPlayer,
}) => {
  const setArray = [
    setHome,
    setSearch,
    setLike,
    setPlayer,
    setUser,
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
      <div className="border-r-2 border-r-white bg-primary h-screen w-2/12 lg:w-max rounded-xl flex flex-col items-center flex-wrap overflow-hidden">
        <div
          className={`${
            miniPlayer ? "h-5/6 lg:h-full" : "h-3/4 lg:h-5/6 "
          } flex flex-col justify-evenly items-center`}>
          <IoHome
            title="Home"
            onClick={() => handleClickIcons(0)}
            className={`text-2xl lg:text-4xl lg:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              home && "text-icons"
            }`}
          />
          <IoSearch
            title="Search"
            onClick={() => handleClickIcons(1)}
            className={`text-2xl lg:text-4xl lg:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              search && "text-icons"
            }`}
          />
          <IoHeart
            title="Favourites"
            onClick={() => handleClickIcons(2)}
            className={`text-2xl lg:text-4xl lg:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              like && "text-icons"
            }`}
          />
          <IoMusicalNotes
            title="Player"
            onClick={() => handleClickIcons(3)}
            className={`text-2xl lg:text-4xl lg:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              player && "text-icons"
            }`}
          />
          <IoPerson
            title="User"
            onClick={() => handleClickIcons(4)}
            className={`text-2xl lg:text-4xl lg:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
              user && "text-icons"
            }`}
          />
          <IoSettingsSharp
            title="Settings"
            onClick={() => handleClickIcons(5)}
            className={`text-2xl lg:text-4xl lg:mx-5 cursor-pointer transition-all duration-200 hover:text-icons ${
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
