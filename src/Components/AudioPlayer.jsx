import { useRef, useState } from "react";
import tracks from "../Data/tracks";

import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

import "./style.scss";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const audioRef = useRef();
  console.log(audioRef);

  return (
    <>
      <div className="flex bg-primary text-white w-screen rounded-xl md:flex-row md:fixed md:bottom-2 md:h-32 flex-col items-center">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
        <Controls audioRef={audioRef} />
        <ProgressBar />
      </div>
    </>
  );
};
export default AudioPlayer;
