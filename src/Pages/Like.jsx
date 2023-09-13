import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IoHeart } from "react-icons/io5";
import LikeLoader from "../Components/Loaders/LikeLoader";
import { homeTracks } from "../data";

const Like = ({
  token,
  favourites,
  setTrack,
  setIsPlaying,
  isPlaying,
  audioRef,
  setPlayList,
  storeHeartList,
}) => {
  const [res, setRes] = useState([]);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLikedTracks = () => {
    try {
      favourites.length > 0 &&
        favourites.forEach(async (item) => {
          const { data } = await axios.get(
            `https://api.spotify.com/v1/tracks/${item}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          data.preview_url !== null && setRes((res) => [...res, data]);
          // const newArray = [...new Map(res.map((v) => [v.name, v])).values()];
          // setRes(newArray);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getLikedList = async () => {
    try {
      homeTracks.forEach(async (item) => {
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
      list.forEach((item) => (item.heart = false));
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
    getLikedTracks();
    getLikedList();
    setTimeout(() => {
      token !== "" && setLoading(false);
    }, 2000);
  }, [token]);

  return (
    <>
      {loading ? (
        <LikeLoader />
      ) : (
        <>
          <div
            className={`px-3 items-center bg-white rounded-box text-black lg:w-1/3 m-5 overflow-y-scroll transition-all ease-in-out duration-300 ${
              res.length > 0 ? "h-5/6" : "h-fit"
            }`}>
            <p className="bg-white py-3 text-2xl sticky top-0 z-10 font-bold">
              Liked Tracks
            </p>
            {/* Artist Tracks */}
            {res.length > 0 ? (
              res.length > 0 &&
              res.map(
                (item, index) =>
                  item.preview_url !== null &&
                  "name" in item &&
                  index < favourites.length && (
                    <Fade delay={index} key={index}>
                      <div
                        title={item.name}
                        className="flex justify-between items-center">
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
            ) : (
              <img
                src="https://ik.imagekit.io/xji6otwwkb/RaagBeats/output-onlinegiftools.gif?updatedAt=1694634763651"
                alt="Add Song"
              />
            )}
          </div>

          {/* Editor Choice */}
          <div className="px-3 items-center bg-white rounded-xl text-black lg:w-1/3 w-full m-5 h-5/6 overflow-y-scroll transition-all ease-in-out duration-300">
            <p className="bg-white py-3 text-2xl sticky top-0 z-10 font-bold">
              Editor Choice
            </p>
            {list.length > 0 &&
              list.map(
                (item, index) =>
                  index < 12 && (
                    <Fade delay={index} key={index}>
                      <div
                        title={item.name}
                        className="flex justify-between items-center">
                        <div
                          className="flex justify-stretch items-center space-x-6 mt-2 cursor-pointer"
                          onClick={() => {
                            play(item);
                            setPlayList(list);
                          }}>
                          <img
                            src={item.album.images[2].url}
                            className="rounded-full object-cover"
                            alt="avatar"
                          />
                          <div>
                            <p className="py-2 break-words text-xl text-secondary">
                              {item.name}
                            </p>
                            <p className="break-words text-lg text-secondary hidden lg:block">
                              {item.artists && item.artists[0].name}
                            </p>
                          </div>
                        </div>
                        <div>
                          <IoHeart className="text-3xl text-heart" />
                        </div>
                      </div>
                    </Fade>
                  )
              )}
          </div>
        </>
      )}
    </>
  );
};

export default Like;
