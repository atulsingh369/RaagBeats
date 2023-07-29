import React, { useState } from "react";
import AudioPlayer from "./Components/AudioPlayer";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";

export default function App() {
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [like, setLike] = useState(false);
  const [player, setPlayer] = useState(false);
  const [folder, setFolder] = useState(false);
  const [setting, setSetting] = useState(false);

  return (
    <>
      <React.StrictMode>
        <div className="bg-secondary flex h-screen transition-all duration-500 ease-linear text-white">
          <SideBar
            {...{
              home,
              search,
              like,
              player,
              folder,
              setting,
              setHome,
              setSearch,
              setLike,
              setPlayer,
              setFolder,
              setSetting,
            }}
          />
          <Content
            {...{
              home,
              search,
              like,
              player,
              folder,
              setting,
            }}
          />
        </div>
        <AudioPlayer
          {...{ setHome, setSearch, setLike, setPlayer, setFolder, setSetting }}
        />
      </React.StrictMode>
    </>
  );
}
