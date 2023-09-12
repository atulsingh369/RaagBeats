import { Fade } from "react-awesome-reveal";
import { IoHeart } from "react-icons/io5";

const ArtistTracks = ({
  setArtistDisp,
  artistTracks,
  play,
  setPlayList,
  name,
  storeHeartList,
  heartList,
}) => {
  return (
    <>
      <div className="flex justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          className="mx-2 hidden lg:block cursor-pointer"
          title="Clear"
          onClick={() => setArtistDisp(false)}
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825Z"
          />
        </svg>
        <p className="bg-white py-3 text-2xl sticky top-0 z-10 font-bold">
          {name}
        </p>
      </div>

      {/* Artist Tracks */}
      {artistTracks.length > 0 &&
        artistTracks.map(
          (item, index) =>
            item.preview_url !== null &&
            "name" in item && (
              <Fade delay={index} key={index}>
                <div
                  onClick={() => {
                    play(item);
                    setPlayList(artistTracks);
                  }}
                  title={item.name}
                  className="flex justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                  <img
                    src={item.album && item.album.images[2].url}
                    className=" rounded-full object-cover"
                    alt="avatar"
                  />
                  <div>
                    <p className="py-2 break-words text-xl text-secondary">
                      {item.name}
                    </p>
                    <p className="break-words text-lg text-secondary">
                      {item.artists && item.artists[0].name}
                    </p>
                  </div>
                  <IoHeart
                    onClick={storeHeartList}
                    className={`text-3xl hidden lg:block ${
                      heartList && "text-icons"
                    }`}
                  />
                </div>
              </Fade>
            )
        )}
    </>
  );
};

export default ArtistTracks;
