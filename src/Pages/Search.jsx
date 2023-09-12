import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { searchAlbums, searchArtists, searchTracks } from "../data";

const Search = ({
  token,
  setTrack,
  setIsPlaying,
  isPlaying,
  audioRef,
  setPlayList,
}) => {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]); // store search result
  const [list, setList] = useState([]); // store recommendation
  const [artists, setArtists] = useState([]); // store artists
  const [album, setAlbum] = useState([]); // store albums
  const [artistKey, setArtistKey] = useState(4); // store no of atists displayed
  const [albumKey, setAlbumKey] = useState(4); // store no of albums displayed
  const [loading, setLoading] = useState(true); // Set Loading

  // Get Search Result
  const getTrack = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=artist%2Ctrack&market=IN&limit=8`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      data.tracks.items[0].preview_url !== null &&
        setRes([res, ...data.tracks.items]);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Recoomendations
  const getList = async () => {
    try {
      searchTracks.forEach(async (item) => {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/tracks/${item}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        data.preview_url !== null && setList((list) => [...list, data]);
      });
      const newArray = [...new Map(list.map((v) => [v.name, v])).values()];
      setList(newArray);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Artists
  const getArtists = async () => {
    try {
      searchArtists.forEach(async (item) => {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/artists/${item}?market=IN`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setArtists((artists) => [...artists, data]);
      });
      const newArray = [...new Map(artists.map((v) => [v.name, v])).values()];
      setArtists(newArray);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Artists Top Tracks
  const getArtistTrack = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${id}/top-tracks?market=IN`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(data.tracks);
      // setAlbum([album, ...data.tracks.items]);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Albums
  const getAlbums = async () => {
    try {
      searchAlbums.forEach(async (item) => {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/albums/${item}?market=IN`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setAlbum((album) => [...album, data]);
      });
      const newArray = [...new Map(album.map((v) => [v.name, v])).values()];
      setAlbum(newArray);
    } catch (error) {
      console.log(error);
    }
  };

  const play = (item) => {
    setTrack(item);
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 50);
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  useEffect(() => {
    search !== "" && getTrack();
    getList();
    getArtists();
    getAlbums();
    (token !== "") & setLoading(false);
  }, [search, token]);

  return (
    <>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <>
          <div className="p-3 items-center bg-white rounded-xl text-black lg:w-1/3 w-full m-5 h-5/6 overflow-y-scroll transition-all ease-in-out duration-300">
            {/* Search Bar */}
            <div className="flex sticky top-0 z-10 justify-evenly bg-[#3b3b3b] rounded-box items-center">
              {search && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="mx-2 hidden lg:block cursor-pointer"
                  title="Clear"
                  onClick={() => setSearch("")}
                  viewBox="0 0 24 24">
                  <path
                    fill="white"
                    d="m7.825 13l5.6 5.6L12 20l-8-8l8-8l1.425 1.4l-5.6 5.6H20v2H7.825Z"
                  />
                </svg>
              )}
              <input
                type="search"
                placeholder="Search Tracks..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                className="w-full text-white p-5 outline-none rounded-2xl"
              />
            </div>

            {/* Recommendation */}
            {res.length > 0 && search
              ? res.map((item, index) => (
                  <Fade delay={index} key={index}>
                    <div
                      onClick={() => {
                        play(item);
                        setPlayList(res);
                      }}
                      title={item.name}
                      className="flex justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                      <img
                        src={item.album && item.album.images[2].url}
                        className=" rounded-full object-cover"
                        alt="logo"
                      />
                      <div>
                        <p className="py-2 break-words text-xl text-secondary">
                          {item.name}
                        </p>
                        <p className="break-words text-lg text-secondary">
                          {item.artists && item.artists[0].name}
                        </p>
                      </div>
                    </div>
                  </Fade>
                ))
              : list.length > 0 &&
                list.map(
                  (item, index) =>
                    index < 8 && (
                      <Fade delay={index} key={index}>
                        {/* Search Result */}
                        <div
                          onClick={() => {
                            play(item);
                            setPlayList(list);
                          }}
                          title={item.name}
                          className="flex justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                          <img
                            src={item.album.images[2].url}
                            className=" rounded-full object-cover"
                            alt="logo"
                          />
                          <p className="py-2 break-words text-xl text-secondary">
                            {item.name.replace(/ *\([^]*\) */g, "")}
                          </p>
                        </div>
                      </Fade>
                    )
                )}
          </div>

          <div className="px-3 items-center bg-white rounded-xl text-black lg:w-1/3 w-full m-5 h-5/6 overflow-y-scroll transition-all ease-in-out duration-300">
            {/* Top Artist */}
            <div>
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
                            onClick={() => getArtistTrack(item.id)}
                            title={item.name}
                            className="flex flex-col justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                            <img
                              src={item.images && item.images[0].url}
                              className="w-24 rounded-full object-cover"
                              alt="logo"
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
            <div>
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
                            // onClick={() => getAlbums(item.id)}
                            title={item.name.replace(/ *\([^]*\) */g, "")}
                            className="flex flex-col justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                            <img
                              src={item.images && item.images[0].url}
                              className="w-24 rounded-full object-cover"
                              alt="logo"
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
          </div>
        </>
      )}
    </>
  );
};

export default Search;
