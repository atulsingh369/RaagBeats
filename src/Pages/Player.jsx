import AudioPlayer from "../Components/AudioPlayer";
import { Fade } from "react-awesome-reveal";

const Player = ({ favourites, setFavourites }) => {
  const player = true; // To ensure only sideplayer control is active => We will pass this in each component of Audioplayer to ensure different configuration for each type.

  return (
    <>
      <div className="flex justify-center items-center rounded-xl md:my-0 m-5">
        <Fade direction="up">
          <AudioPlayer
            {...{
              favourites,
              setFavourites,
              player,
            }}
          />
        </Fade>
      </div>
    </>
  );
};

export default Player;
