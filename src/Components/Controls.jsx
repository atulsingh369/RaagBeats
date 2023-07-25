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
    <div className="w-full flex justify-evenly">
      <button>
        <IoPlaySkipBackSharp />
      </button>
      <button>
        <IoPlayBackSharp />
      </button>

      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
      </button>
      <button>
        <IoPlayForwardSharp />
      </button>
      <button>
        <IoPlaySkipForwardSharp />
      </button>
    </div>
  );
};
export default Controls;
