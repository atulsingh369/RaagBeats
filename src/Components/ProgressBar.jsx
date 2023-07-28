import "./slider.css";

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
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
      <div className="md:flex hidden w-full justify-evenly items-center mx-5">
        <div>{formatTime(timeProgress)}</div>
        <input
          ref={progressBarRef}
          type="range"
          defaultValue="0"
          onChange={handleProgressChange}
          className="slide appearance-none w-2/3 h-2 bg-[#666666] cursor-pointer overflow-hidden rounded-xl transition-all duration-100"
        />
        <div>{formatTime(duration)}</div>
      </div>
    </>
  );
};
export default ProgressBar;
