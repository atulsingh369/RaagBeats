import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "./Components/AudioPlayer";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import { getAccessToken, getTrack } from "./axios";
import Search from "./Components/Search";
import axios from "axios";
import tracks from "./Data/tracks";

export default function App() {
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [like, setLike] = useState(false);
  const [player, setPlayer] = useState(false);
  const [user, setUser] = useState(false);
  const [setting, setSetting] = useState(false);

  const [favourites, setFavourites] = useState([]);

  const [token, setToken] = useState("");
  const [track, setTrack] = useState([]);
  const [data, setData] = useState();

  // Defining all controls here to initialize both players at same time to make it sync with each other
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef();

  const progressBarRef = useRef();

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
    setIsPlaying(true);
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
        <div className="bg-secondary flex h-screen transition-all duration-500 ease-linear text-white">
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
              favourites,
              setFavourites,
              home,
              search,
              like,
              player,
              user,
              setting,
              currentTrack,
              audioRef,
              setDuration,
              progressBarRef,
              handleNext,
              duration,
              setTimeProgress,
              trackIndex,
              setTrackIndex,
              setCurrentTrack,
              isPlaying,
              setIsPlaying,
              timeProgress,
              token,
              setData,
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
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
            duration,
            setTimeProgress,
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
            isPlaying,
            setIsPlaying,
            timeProgress,
            token,
            data,
          }}
        />
        {/* <Search {...{ token }} /> */}
      </React.StrictMode>
    </>
  );
}
