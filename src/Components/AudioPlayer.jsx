import { useRef, useState } from "react";
import tracks from "../Data/tracks";

import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

import "./style.scss";

const AudioPlayer = ({
  player,
  setHome,
  setSearch,
  setLike,
  setPlayer,
  setFolder,
  setSetting,
}) => {
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
      <div
        onClick={() => handleClickIcons(3)}
        className={`flex text-2xl font-semibold bg-primary text-white items-center border-white ${
          !player
            ? "fixed bottom-0 w-screen md:h-32 border-y-2 rounded-xl"
            : "flex-col border-2 p-2 rounded-box md:w-96"
        }`}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <DisplayTrack
          {...{
            currentTrack,
            audioRef,
            setDuration,
            progressBarRef,
            handleNext,
            player,
          }}
        />
        <Controls
          {...{
            audioRef,
            progressBarRef,
            duration,
            setTimeProgress,
            tracks,
            trackIndex,
            setTrackIndex,
            setCurrentTrack,
            handleNext,
            isPlaying,
            setIsPlaying,
            player,
          }}
        />
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration, player }}
        />
      </div>
    </>
  );
};
export default AudioPlayer;
