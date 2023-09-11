import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { searchTracks } from "../data";

const Search = ({ token, setData, setIsPlaying, isPlaying, audioRef }) => {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);
  const [list, setList] = useState([]);

  const getTrack = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=track&market=IN&limit=10`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      data.tracks.items[0].preview_url !== null &&
        setRes([res, ...data.tracks.items]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

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

  const play = (item) => {
    setData(item);
    setIsPlaying(!isPlaying);
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  useEffect(() => {
    search !== "" && getTrack();
    getList();
  }, [search, token]);

  return (
    <>
      <div className="justify-center bg-white items-center rounded-xl text-black p-5 md:w-1/3 m-5">
        <input
          type="search"
          placeholder="Search Tracks..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full text-white p-5 outline-none rounded-2xl"
        />
        {res.length > 0 && search
          ? res.map((item, index) => (
              <Fade delay={index} key={index}>
                <div
                  onClick={() => play(item)}
                  title={item.name}
                  className="flex justify-stretch items-center space-x-6 mt-5 cursor-pointer">
                  {/* <img
                        src={item.album.images[2].url}
                        className=" rounded-full object-cover"
                        alt="logo"
                      /> */}
                  <p className="py-2 break-words text-xl text-secondary">
                    {item.name}
                  </p>
                </div>
              </Fade>
            ))
          : list.length > 0 &&
            list.map(
              (item, index) =>
                index < 8 && (
                  <Fade delay={index} key={index}>
                    <div
                      onClick={() => play(item)}
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
      <div className="flex justify-center items-center bg-white rounded-xl text-black md:w-1/3 m-5">
        Search
      </div>
    </>
  );
};

export default Search;
