import { useRef, useState } from "react";
import tracks from "../Data/tracks";

import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

import "./style.scss";

const AudioPlayer = () => {
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
      <div className="flex text-2xl font-semibold bg-primary text-white w-screen rounded-xl md:flex-row md:fixed md:bottom-2 md:h-32 flex-col items-center">
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
          }}
        />
        <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
    </>
  );
};
export default AudioPlayer;
