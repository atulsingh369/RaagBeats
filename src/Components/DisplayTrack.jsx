import { BsMusicNoteBeamed } from "react-icons/bs";

const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  return (
    <div className="w-full my-5 flex items-center justify-evenly">
      <div
        className="md:flex hidden md:w-fit md:animate-spin-slow w-full items-center justify-center rounded-box md:rounded-full bg-no-repeat bg-cover md:mb-0 mb-8 bg-secondary"
        style={{
          backgroundImage: "url(" + `${currentTrack.thumbnail}` + ")",
        }}>
        {currentTrack.thumbnail ? (
          <div className="flex h-96 md:w-24 md:h-24 w-full rounded-box md:rounded-full items-center backdrop-blur-md">
            <img
              className="max-h-full min-w-full object-contain rounded-box md:rounded-full"
              src={currentTrack.thumbnail}
              alt="Thumbnail"
            />
          </div>
        ) : (
          <BsMusicNoteBeamed className="text-7xl text-white" />
        )}
			</div>
			
      <div className="space-y-2">
        <p className="md:text-2xl text-xl text-center">{currentTrack.title}</p>
        <p className="md:text-xl text-lg text-center">{currentTrack.author}</p>
			</div>
			
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onEnded={handleNext}
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
};
export default DisplayTrack;

{
  /* <div
        style={{
          backgroundImage: "url(" + `${currentTrack.thumbnail}` + ")",
        }}
        className="flex md:w-fit md:animate-spin-slow w-full items-center justify-center rounded-box md:rounded-full bg-no-repeat bg-cover md:mb-0 mb-8 bg-secondary">
        {currentTrack.thumbnail ? (
          <div className="flex h-96 md:w-24 md:h-24 w-full rounded-box md:rounded-full items-center backdrop-blur-md">
            <img
              className="max-h-full min-w-full object-contain rounded-box md:rounded-full"
              src={currentTrack.thumbnail}
              alt="Thumbnail"
            />
          </div>
        ) : (
          <BsMusicNoteBeamed className="text-7xl text-white" />
        )}
      </div> */
}
