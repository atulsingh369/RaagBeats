import { useRef, useState } from "react";
import tracks from "../Data/tracks";

import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const audioRef = useRef();
  console.log(audioRef);

  return (
    <div className="flex p-1 border-2 rounded-xl border-black w-1/3 flex-col items-center">
      <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
      <Controls audioRef={audioRef} />
      <ProgressBar />
    </div>
  );
};
export default AudioPlayer;
