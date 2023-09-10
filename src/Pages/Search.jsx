import axios from "axios";
import { useEffect, useState } from "react";

const Search = ({ token, setData, setIsPlaying }) => {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState([]);

  const getTrack = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/search?q=${search}&type=track`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setRes([res, ...data.tracks.items]);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search !== "" && getTrack();
  }, [search]);

  return (
    <>
      <div className="justify-center items-center rounded-xl text-white md:w-1/3 m-5">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-5 outline-none rounded-2xl"
        />
        {res.length > 0 &&
          res.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setData(item);
                setIsPlaying(true);
              }}
              className="flex flex-col justify-center items-center">
              {item.name}
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center bg-white rounded-xl text-black md:w-1/3 m-5">
        Search
      </div>
    </>
  );
};

export default Search;
