import { useEffect, useState } from "react";
// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

const Controls = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying, audioRef]);

  return (
    <div className="w-full flex justify-evenly my-2">
      <button title="Skip Back">
        <IoPlaySkipBackSharp />
      </button>
      <button title="Previous">
        <IoPlayBackSharp />
      </button>

      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? (
          <IoPauseSharp title="Pause" />
        ) : (
          <IoPlaySharp title="Play" />
        )}
      </button>
      <button title="Next">
        <IoPlayForwardSharp />
      </button>
      <button title="Skip Forward">
        <IoPlaySkipForwardSharp />
      </button>
    </div>
  );
};
export default Controls;
