import { Fade } from "react-awesome-reveal";

const SearchAlbumArtist = ({
  artists,
  searchArtists,
  artistKey,
  getArtistTrack,
  setArtistKey,
  album,
  searchAlbums,
  albumKey,
  getTracksAlbum,
  setAlbumKey,
  setName,
  setImage,
}) => {
  return (
    <>
      {/* Top Artist */}
      <div className="stick top-0">
        <p className="bg-white py-3 text-2xl sticky top-0 z-10 font-bold">
          Top Artists
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {/* Artists */}
          {artists.length > 0 &&
            artists.map(
              (item, index) =>
                index < searchArtists.length &&
                index < artistKey && (
                  <Fade delay={index * 10} key={index}>
                    <div
                      onClick={() => {
                        getArtistTrack(item.id);
                        setName(item.name.replace(/ *\([^]*\) */g, ""));
                      }}
                      title={item.name}
                      className="flex flex-col justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                      <img
                        src={item.images && item.images[0].url}
                        className="w-24 rounded-full object-cover"
                        alt="avatar"
                      />
                      <div>
                        <p className="py-2 font-semibold text-center break-words text-xl text-secondary">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  </Fade>
                )
            )}
          {/* More */}
          {artistKey < searchArtists.length && (
            <p className="py-1 lg:col-span-4 md:col-span-3 col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                className="mx-auto font-bold animate-bounce cursor-pointer"
                onClick={() => setArtistKey(artistKey + 4)}
                viewBox="0 0 15 15">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  d="m14 5l-6.5 7L1 5"
                />
              </svg>
            </p>
          )}
        </div>
      </div>

      {/* Top Albums */}
      <div className="stick top-0">
        <p className="bg-white py-3 text-2xl sticky top-0 z-10 font-bold">
          Top Albums
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {/* Albums */}
          {album.length > 0 &&
            album.map(
              (item, index) =>
                index < searchAlbums.length &&
                index < albumKey && (
                  <Fade delay={index * 10} key={index}>
                    <div
                      onClick={() => {
                        getTracksAlbum(item.id);
												setName(item.name.replace(/ *\([^]*\) */g, ""));
												setImage(item.images[2].url);
                      }}
                      title={item.name.replace(/ *\([^]*\) */g, "")}
                      className="flex flex-col justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                      <img
                        src={item.images && item.images[0].url}
                        className="w-24 rounded-full object-cover"
                        alt="avatar"
                      />
                      <div>
                        <p className="py-2 font-semibold text-center break-words text-xl text-secondary">
                          {item.name.replace(/ *\([^]*\) */g, "")}
                        </p>
                      </div>
                    </div>
                  </Fade>
                )
            )}

          {/* More */}
          {albumKey < searchAlbums.length && (
            <p className="py-1 lg:col-span-4 md:col-span-3 col-span-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                className="mx-auto font-bold animate-bounce cursor-pointer"
                onClick={() => setAlbumKey(albumKey + 4)}
                viewBox="0 0 15 15">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  d="m14 5l-6.5 7L1 5"
                />
              </svg>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchAlbumArtist;
