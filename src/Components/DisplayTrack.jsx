import { useState } from "react";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";

const DisplayTrack = ({
  favourites,
  setFavourites,
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  player,
}) => {
  const [like, setLike] = useState(false);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const storeLike = () => {
    setFavourites([...favourites, currentTrack.title]);
    setLike(true);

    console.log(favourites);
  };

  return (
    <div
      className={`w-full space-y-4 flex items-center justify-evenly ${
        player ? "flex-col" : "my-2"
      }`}>
      {/* Track Img */}
      <div
        className={`items-center justify-center bg-no-repeat bg-cover bg-secondary ${
          !player
            ? "md:flex hidden w-fit h-fit animate-spin-slow rounded-full"
            : "flex w-full  rounded-box"
        }`}
        style={{
          backgroundImage: "url(" + `${currentTrack.thumbnail}` + ")",
        }}>
        {currentTrack.thumbnail ? (
          <div
            className={`flex items-center backdrop-blur-md ${
              !player
                ? "h-24 w-24 rounded-full"
                : "md:h-96 h-56 w-full rounded-box"
            }`}>
            <img
              className={`max-h-full min-w-full object-contain ${
                !player ? "rounded-full" : "rounded-box"
              }`}
              src={currentTrack.thumbnail}
              alt="Thumbnail"
            />
          </div>
        ) : (
          <BsMusicNoteBeamed
            className={`text-7xl text-white ${player && "md:my-36 my-20"}`}
          />
        )}
      </div>

      {/* Track Details */}
      <div className={`flex justify-evenly items-center ${player && "w-full"}`}>
        <div className="space-y-2">
          <p className="md:text-2xl text-xl text-center">
            {currentTrack.title}
          </p>
          <p className="md:text-xl text-lg text-center">
            {currentTrack.author}
          </p>
        </div>

        <IoHeart
          onClick={storeLike}
          className={`md:text-3xl ${!player && "hidden"} ${
            like && "text-icons"
          }`}
        />
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
