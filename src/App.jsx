import React, { useRef, useState } from "react";
import AudioPlayer from "./Components/AudioPlayer";
import SideBar from "./Components/SideBar";
import Content from "./Components/Content";
import tracks from "./Data/tracks";

export default function App() {
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [like, setLike] = useState(false);
  const [player, setPlayer] = useState(false);
  const [folder, setFolder] = useState(false);
  const [setting, setSetting] = useState(false);

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
              trackIndex,
              setTrackIndex,
              currentTrack,
              setCurrentTrack,
              timeProgress,
              setTimeProgress,
              duration,
              setDuration,
              isPlaying,
              setIsPlaying,
              audioRef,
              progressBarRef,
              handleNext,
            }}
          />
        </div>
        <AudioPlayer
          {...{
            setHome,
            setSearch,
            setLike,
            setPlayer,
            setFolder,
            setSetting,
            trackIndex,
            setTrackIndex,
            currentTrack,
            setCurrentTrack,
            timeProgress,
            setTimeProgress,
            duration,
            setDuration,
            isPlaying,
            setIsPlaying,
            audioRef,
            progressBarRef,
            handleNext,
          }}
        />
      </React.StrictMode>
    </>
  );
}
