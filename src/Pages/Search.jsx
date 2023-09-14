import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { searchAlbums, searchArtists, searchTracks } from "../data";
import AlbumTracks from "../Components/AlbumTracks";
import ArtistTracks from "../Components/ArtistTracks";
import SearchAlbumArtist from "../Components/searchAlbumArtist";
import { IoHeart } from "react-icons/io5";
import SearchLoader from "../Components/Loaders/SearchLoader";

const Search = ({
  token,
  setTrack,
  setIsPlaying,
  isPlaying,
  audioRef,
  setPlayList,
  storeHeartList,
  favourites,
  setMiniPlayer,
}) => {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]); // store search result
  const [list, setList] = useState([]); // store recommendation
  const [artists, setArtists] = useState([]); // store artists
  const [artistTracks, setArtistTracks] = useState([]); // store tracks of artist
  const [album, setAlbum] = useState([]); // store albums
  const [albumTracks, setAlbumTracks] = useState([]); // store tracks of album
  const [artistKey, setArtistKey] = useState(4); // store no of atists displayed
  const [albumKey, setAlbumKey] = useState(4); // store no of albums displayed
  const [name, setName] = useState(""); // store name of artist/album
  const [image, setImage] = useState(""); // store image of album tracks

  const [albumDisp, setAlbumDisp] = useState(false);
  const [artistDisp, setArtistDisp] = useState(false);
  const [loading, setLoading] = useState(true); // Set Loading

  // Get Search Result
  const getTrack = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=album%2Cartist%2Ctrack&market=IN&limit=8`,
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
      setArtistTracks([artistTracks, ...data.tracks]);
      setArtistDisp(true);
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

  // Get Album Tracks
  const getTracksAlbum = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/albums/${id}/tracks?market=IN&limit=10`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAlbumTracks([albumTracks, ...data.items]);
      setAlbumDisp(true);
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

  setMiniPlayer(false);

  useEffect(() => {
    search !== "" && getTrack();
    getList();
    getArtists();
    getAlbums();
    setTimeout(() => {
      token !== "" && setLoading(false);
    }, 2500);
  }, [search, token]);

  return (
    <>
      {loading ? (
        <SearchLoader />
      ) : (
        <>
          <div className="p-3 items-center bg-white rounded-box text-black lg:w-1/3 w-full m-5 h-5/6 overflow-y-scroll transition-all ease-in-out duration-300">
            {/* Search Bar */}
            <div className="flex sticky top-0 z-10 justify-evenly bg-[#3b3b3b] rounded-box items-center">
              {search && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className="mx-2 cursor-pointer"
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
              ? res.map(
                  (item, index) =>
                    item.preview_url !== null &&
                    "name" in item && (
                      <Fade delay={index} key={index}>
                        <div
                          title={item.name}
                          className="flex justify-between items-center">
                          <div
                            onClick={() => {
                              play(item);
                              setPlayList(albumTracks);
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
                          </div>
                          {/* Heart */}
                          <div
                            className={`${
                              favourites.length > 0 &&
                              favourites.forEach(
                                (id) => item.id == id && (item.heart = true)
                              )
                            }`}>
                            <IoHeart
                              onClick={() => storeHeartList(item)}
                              className={`text-3xl cursor-pointer ${
                                item.heart == true
                                  ? "text-heart"
                                  : "text-secondary"
                              }`}
                            />
                          </div>
                        </div>
                      </Fade>
                    )
                )
              : list.length > 0 &&
                list.map(
                  (item, index) =>
                    item.preview_url !== null &&
                    "name" in item &&
                    index < 10 && (
                      <Fade delay={index} key={index}>
                        {/* Search Result */}
                        <div
                          title={item.name}
                          className="flex justify-between items-center">
                          <div
                            onClick={() => {
                              play(item);
                              setPlayList(albumTracks);
                            }}
                            title={item.name}
                            className="flex justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                            <img
                              src={item.album.images[2].url}
                              className=" rounded-full object-cover"
                              alt="avatar"
                            />
                            <p className="py-2 break-words text-xl text-secondary">
                              {item.name.replace(/ *\([^]*\) */g, "")}
                            </p>
                          </div>
                          {/* Heart */}
                          <div
                            className={`${
                              favourites.length > 0 &&
                              favourites.forEach(
                                (id) => item.id == id && (item.heart = true)
                              )
                            }`}>
                            <IoHeart
                              onClick={() => storeHeartList(item)}
                              className={`text-3xl cursor-pointer ${
                                item.heart == true
                                  ? "text-heart"
                                  : "text-secondary"
                              }`}
                            />
                          </div>
                        </div>
                      </Fade>
                    )
                )}
          </div>

          <div className="px-3 items-center bg-white rounded-box text-black lg:w-1/3 w-full m-5 h-5/6 overflow-y-scroll transition-all ease-in-out duration-300">
            {!artistDisp && !albumDisp ? (
              <SearchAlbumArtist
                {...{
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
                }}
              />
            ) : artistDisp ? (
              <ArtistTracks
                {...{
                  setArtistDisp,
                  artistTracks,
                  play,
                  setPlayList,
                  name,
                  storeHeartList,
                  favourites,
                }}
              />
            ) : (
              albumDisp && (
                <AlbumTracks
                  {...{
                    setAlbumDisp,
                    albumTracks,
                    play,
                    setPlayList,
                    name,
                    image,
                    storeHeartList,
                    favourites,
                  }}
                />
              )
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Search;
