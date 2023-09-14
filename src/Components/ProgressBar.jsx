import "./slider.css";

const ProgressBar = ({
  progressBarRef,
  audioRef,
  timeProgress,
  duration,
  miniPlayer,
}) => {
  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  return (
    <>
      <div
        className={`flex w-full justify-evenly items-center mx-5 my-3 ${
          !miniPlayer && "md:flex hidden my-0"
        }`}>
          <div className="md:text-xl text-lg">{formatTime(timeProgress)}</div>
          <input
            ref={progressBarRef}
            type="range"
            defaultValue="0"
            onChange={handleProgressChange}
            className="slide appearance-none md:w-2/3 h-2 bg-[#666666] cursor-pointer overflow-hidden rounded-xl transition-all duration-100"
          />
          <div className="md:text-xl text-lg">{formatTime(duration)}</div>
      </div>
    </>
  );
};
export default ProgressBar;
