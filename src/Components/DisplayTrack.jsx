import { Fade } from "react-awesome-reveal";
import { IoHeart } from "react-icons/io5";

const DisplayTrack = ({
  audioRef,
  setDuration,
  progressBarRef,
  handleNext,
  miniPlayer,
  setHome,
  setSearch,
  setLike,
  setPlayer,
  setUser,
  setSetting,
  track,
  heart,
  storeHeartList,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const setArray = [
    setHome,
    setSearch,
    setLike,
    setPlayer,
    setUser,
    setSetting,
  ];
  const handleClickIcons = (e) => {
    for (let i = 0; i < setArray.length; ++i) {
      e !== i && setArray[i](false);
      setArray[e](true);
    }
  };

  return (
    <div
      className={`w-full space-y-4 flex items-center justify-evenly ${
        miniPlayer ? "flex-col" : "my-2"
      }`}>
      {/* Track Img */}
      <div
        onClick={() => handleClickIcons(3)}
        className={`items-center justify-center bg-no-repeat bg-cover bg-secondary ${
          !miniPlayer
            ? "md:flex hidden w-fit h-fit animate-spin-slow rounded-full"
            : "flex w-full rounded-box"
        }`}
        style={{
          backgroundImage:
            "url(" +
            `${
              track && track.album
                ? track.album.images[0].url
                : "https://i.scdn.co/image/ab67616d0000b273460fe6f2972b44fc069c3fec"
            }` +
            ")",
        }}>
        <div
          className={`flex items-center backdrop-blur-md ${
            !miniPlayer
              ? "h-24 w-24 rounded-full"
              : "md:h-96 h-56 w-full rounded-box"
          }`}>
          <img
            className={`max-h-full min-w-full object-contain ${
              !miniPlayer ? "rounded-full" : "rounded-box"
            }`}
            src={
              track && track.album
                ? track.album.images[0].url
                : "https://i.scdn.co/image/ab67616d0000b273460fe6f2972b44fc069c3fec"
            }
            alt="Thumbnail"
          />
        </div>
      </div>

      <Fade direction="left">
        {/* Track Details */}
        <div
          className={`flex justify-evenly items-center ${
            miniPlayer && "w-full"
          }`}>
          <div className="space-y-2">
            <p className="md:text-2xl text-xl text-center">
              {track ? track.name.replace(/ *\([^]*\) */g, "") : "Dashavatar"}
            </p>
            <p className="md:text-xl text-lg text-center">
              {track ? track.artists[0].name : "Narci"}
            </p>
          </div>

          <IoHeart
            onClick={storeHeartList}
            className={`md:text-3xl ${!miniPlayer && "hidden"} ${
              heart && "text-icons"
            }`}
          />
        </div>
      </Fade>
      <audio
        src={
          track
            ? track.preview_url
            : "https://p.scdn.co/mp3-preview/42b2aab9dbc3f64e26b140b810632ccea3af00ed?cid=f2957fbb0ddb4e0b92ec7663ac1b76ab"
        }
        ref={audioRef}
        onEnded={handleNext}
        onLoadedMetadata={onLoadedMetadata}
      />
    </div>
  );
};
export default DisplayTrack;
