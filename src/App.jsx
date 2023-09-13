import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "./Components/AudioPlayer";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
// import Search from "./Components/Search";
import axios from "axios";

export default function App() {
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [like, setLike] = useState(false);
  const [player, setPlayer] = useState(false);
  const [user, setUser] = useState(false);
  const [setting, setSetting] = useState(false);

  const [favourites, setFavourites] = useState([]); // Store favourite Track

  const [token, setToken] = useState(""); // Store Token to call API's
  const [track, setTrack] = useState(); // Store Tracks came from API's
  const [playList, setPlayList] = useState([]); // Store Playlist of Tracks came from API's

  // Defining all controls here to initialize both players at same time to make it sync with each other
  const [trackIndex, setTrackIndex] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  const progressBarRef = useRef();

  const storeHeartList = (item) => {
    if (item.heart == false) {
      item && setFavourites([...favourites, item.id]);
      item.heart = true;
    } else {
      setFavourites((favourites) =>
        favourites.filter((elem) => elem !== item.id)
      );
      item.heart = false;
    }
  };

  const handleNext = () => {
    if (trackIndex >= playList.length - 1) {
      setTrackIndex(0);
      setTrack(playList[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setTrack(playList[trackIndex + 1]);
    }
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 50);
  };

  const options = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: {
      grant_type: "client_credentials",
      client_id: "f2957fbb0ddb4e0b92ec7663ac1b76ab",
      client_secret: "e0e24a9a9c364964915640742f1e879d",
    },
  };

  const getToken = async () => {
    try {
      const { data } = await axios(options);
      setToken(data.token_type + " " + data.access_token);
    } catch (error) {
      console.log(error);
    }
    return token;
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <>
      <React.StrictMode>
        <div className="bg-secondary flex h-screen transition-all duration-500 ease-linear text-white scroll-smooth">
          <SideBar
            {...{
              home,
              search,
              like,
              player,
              user,
              setting,
              setHome,
              setSearch,
              setLike,
              setPlayer,
              setUser,
              setSetting,
            }}
          />
          <Content
            {...{
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
            }}
          />
        </div>
        <AudioPlayer
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
          }}
        />
        {/* <Search {...{ token }} /> */}
      </React.StrictMode>
    </>
  );
}
