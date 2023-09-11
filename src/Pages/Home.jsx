import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { homeAlbum, homeTracks } from "../data";
import { IoPlaySharp, IoPauseSharp, IoHeart } from "react-icons/io5";

const Home = ({
  token,
  setData,
  setIsPlaying,
  isPlaying,
  audioRef,
  heartList,
  storeHeartList,
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
        setRes((res) => [...res, data]);
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
        setList((list) => [...list, data]);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const play = (item) => {
    setData(item);
    setIsPlaying(!isPlaying);
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {res.length > 0 &&
              res.map(
                (item, index) =>
                  index < 6 && (
                    <Fade delay={index * 10} key={index}>
                      <div
                        onClick={() => play(item)}
                        title={item.name.replace(/ *\([^]*\) */g, "")}
                        className="relative h-48 lg:h-56 rounded-box m-8 cursor-pointer">
                        <img
                          src={item.album.images[0].url}
                          className="max-h-full min-w-full rounded-box object-cover"
                          alt="banner"
                        />
                        {isPlaying ? (
                          <IoPauseSharp
                            className="absolute bg-primary rounded-full p-3 left-[35%] top-[35%] text-6xl"
                            title="Play"
                          />
                        ) : (
                          <IoPlaySharp
                            className="absolute bg-primary rounded-full p-3 left-[35%] top-[35%] text-6xl"
                            title="Play"
                          />
                        )}
                        <p className="absolute bottom-6 py-2 text-xl w-full text-center bg-secondary">
                          {item.name.replace(/ *\([^]*\) */g, "")}
                        </p>
                      </div>
                    </Fade>
                  )
              )}
          </div>

          <div className="bg-white text-black p-5 rounded-box lg:mt-12 h-fit lg:mx-16 mx-5">
            <p className="">Home</p>
            <p className="text-2xl font-semibold mb-6">Songs out of Box</p>
            {list.length > 0 &&
              list.map(
                (item, index) =>
                  index < 12 && (
                    <Fade delay={index} key={index}>
                      <div
                        onClick={() => play(item)}
                        title={item.name}
                        className="flex justify-stretch items-center space-x-6 cursor-pointer">
                        {isPlaying ? (
                          <IoPauseSharp
                            className="text-secondary text-3xl"
                            title="Play"
                          />
                        ) : (
                          <IoPlaySharp
                            className="text-secondary text-3xl"
                            title="Play"
                          />
                        )}
                        <img
                          src={item.album.images[2].url}
                          className=" rounded-full object-cover"
                          alt="logo"
                        />
                        <p className="py-2 break-words text-xl text-secondary">
                          {item.name.replace(/ *\([^]*\) */g, "")}
                        </p>
                        <IoHeart
                          onClick={storeHeartList}
                          className={`md:text-3xl ${heartList && "text-icons"}`}
                        />
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
