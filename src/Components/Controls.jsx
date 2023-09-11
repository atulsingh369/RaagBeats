import { useCallback, useEffect, useRef, useState } from "react";
// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";
import "./slider.css";

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  playList,
  trackIndex,
  setTrackIndex,
  handleNext,
  isPlaying,
  setIsPlaying,
  player,
  setTrack,
}) => {
  const [volume, setVolume] = useState(100);
  const [muteVolume, setMuteVolume] = useState(false);
  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);

  const skipForward = () => {
    audioRef.current.currentTime += 5;
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 5;
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = playList.length - 1;
      setTrackIndex(lastTrackIndex);
      setTrack(playList[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setTrack(playList[trackIndex - 1]);
    }
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 50);
  };

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <>
      <div className="w-full flex justify-evenly items-center">
        {/* Audio Control */}
        <div
          className={`md:w-2/3 w-full flex justify-evenly items-center ${
            player && "md:w-full my-3"
          }`}>
          <button title="Skip Back" onClick={handlePrevious}>
            <IoPlaySkipBackSharp />
          </button>
          <button
            className={`${!player && "md:block hidden"}`}
            title="Previous"
            onClick={skipBackward}>
            <IoPlayBackSharp />
          </button>

          <button onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <IoPauseSharp title="Pause" />
            ) : (
              <IoPlaySharp title="Play" />
            )}
          </button>
          <button
            className={`${!player && "md:block hidden"}`}
            title="Next"
            onClick={skipForward}>
            <IoPlayForwardSharp />
          </button>
          <button title="Skip Forward" onClick={handleNext}>
            <IoPlaySkipForwardSharp />
          </button>
        </div>

        {/* Volume Control */}
        <label
          className={`w-1/3 md:flex hidden justify-evenly items-center slider ${
            player && "md:hidden"
          }`}>
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="level"
          />

          {/* Mute/VolumeUp/VolumeDown */}
          <button onClick={() => setMuteVolume((prev) => !prev)}>
            {muteVolume || volume < 5 ? (
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24">
                <g fill="none">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M13.26 3.3a1.1 1.1 0 0 1 1.734.78l.006.114v15.612a1.1 1.1 0 0 1-1.643.957l-.096-.062L6.68 16H4a2 2 0 0 1-1.995-1.85L2 14v-4a2 2 0 0 1 1.85-1.994L4 8h2.68l6.58-4.7Zm4.326 5.872L19 10.586l1.414-1.414a1 1 0 1 1 1.414 1.414L20.414 12l1.414 1.414a1 1 0 0 1-1.414 1.415L19 13.413l-1.414 1.415a1 1 0 0 1-1.414-1.415L17.586 12l-1.414-1.414a1 1 0 1 1 1.414-1.414Z"
                  />
                </g>
              </svg>
            ) : volume < 40 ? (
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M301.1 34.8C312.6 40 320 51.4 320 64v384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zm111.5 146.7c21.5 17.6 35.4 44.4 35.4 74.5s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"
                />
              </svg>
            ) : (
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 17 16">
                <path
                  fill="currentColor"
                  d="M13.907 14.407a.75.75 0 0 1-.53-1.281c1.369-1.369 2.123-3.19 2.123-5.127s-.754-3.757-2.123-5.127a.75.75 0 1 1 1.061-1.061c1.653 1.653 2.563 3.85 2.563 6.187s-.91 4.534-2.563 6.187a.748.748 0 0 1-.53.22zm-2.664-1.414a.75.75 0 0 1-.53-1.281a5.256 5.256 0 0 0 0-7.425a.75.75 0 1 1 1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-.702 3.498-1.977 4.773a.748.748 0 0 1-.53.22zm-2.665-1.415a.75.75 0 0 1-.53-1.281a3.254 3.254 0 0 0 0-4.596a.75.75 0 1 1 1.061-1.061a4.756 4.756 0 0 1 0 6.718a.748.748 0 0 1-.53.22zM6.5 15a.504.504 0 0 1-.354-.146L2.292 11H.499a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1.793l3.854-3.854A.499.499 0 0 1 7 1.5v13a.5.5 0 0 1-.5.5z"
                />
              </svg>
            )}
          </button>
        </label>
      </div>
    </>
  );
};
export default Controls;
