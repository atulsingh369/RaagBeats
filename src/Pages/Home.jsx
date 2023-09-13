import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { homeAlbum, homeTracks } from "../data";
import { IoHeart } from "react-icons/io5";

const Home = ({
  token,
  setTrack,
  setIsPlaying,
  isPlaying,
  audioRef,
  storeHeartList,
  setPlayList,
  favourites,
}) => {
  const [res, setRes] = useState([]); // Store Album Tracks
  const [list, setList] = useState([]); // Store List Tracks
  const [loading, setLoading] = useState(true); // Set Loading

  const getTrack = async () => {
    try {
      homeAlbum.forEach(async (item) => {
        const { data } = await axios.get(
          `https://api.spotify.com/v1/tracks/${item}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        data.preview_url !== null && setRes((res) => [...res, data]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getList = async () => {
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
    getTrack();
    getList();
    (token !== "") & setLoading(false);
  }, [token]);

  return (
    <>
      {loading ? (
        <div>Loading..</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-screen">
          {/* Album */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {res.length > 0 &&
              res.map(
                (item, index) =>
                  index < 6 && (
                    <Fade delay={index * 10} key={index}>
                      <div
                        onClick={() => {
                          play(item);
                          setPlayList(res);
                        }}
                        title={item.name.replace(/ *\([^]*\) */g, "")}
                        className="relative h-48 lg:h-56 rounded-box m-8 cursor-pointer">
                        <img
                          src={item.album.images[0].url}
                          className="max-h-full min-w-full rounded-box object-cover"
                          alt="banner"
                        />
                        {/* {isPlaying ? (
                          <IoPauseSharp
                            className="absolute bg-primary rounded-full p-3 left-[35%] top-[35%] text-6xl"
                            title="Play"
                          />
                        ) : (
                          <IoPlaySharp
                            className="absolute bg-primary rounded-full p-3 left-[35%] top-[35%] text-6xl"
                            title="Play"
                          />
                        )} */}
                        <p className="absolute bottom-6 py-2 text-xl w-full text-center bg-secondary">
                          {item.name.replace(/ *\([^]*\) */g, "")}
                        </p>
                      </div>
                    </Fade>
                  )
              )}
          </div>

          {/* Tracks */}
          <div className="bg-white text-black p-3 lg:p-5 rounded-box lg:mt-12 lg:mx-16 mx-2 lg:h-5/6 overflow-y-scroll">
            <p className="">Home</p>
            <p className="text-2xl font-bold mb-6">Top Hits</p>
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
                          {/* <div>
                            {isPlaying ? (
                              <IoPauseSharp
                                className="text-secondary text-xl lg:text-3xl"
                                title="Play"
                              />
                            ) : (
                              <IoPlaySharp
                                className="text-secondary text-xl lg:text-3xl"
                                title="Play"
                              />
                            )}
                          </div> */}
                          <img
                            src={item.album.images[2].url}
                            className="rounded-full object-cover"
                            alt="avatar"
                          />
                          <p className="py-2 break-words text-xl text-secondary">
                            {item.name.replace(/ *\([^]*\) */g, "")}
                          </p>
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
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
