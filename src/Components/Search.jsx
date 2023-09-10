import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

const Search = ({ token }) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState();
  const audioRef = useRef();

  const getSearchResult = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/tracks/7cEbOdPHth4Ca2Qejq55if?si=0b265d034d6446fa`,

        {
          headers: {
            Authorization: token,
          },
        }
      );
      setSearchResults(data.preview_url);
      audioRef.current.play();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(searchResults);

  // useEffect(() => {
  //   if (!search && search !== "") return setSearchResults([]);
  // }, [search]);

  return (
    <>
      <div className="flex flex-col text-2xl items-center justify-center my-24">
        <input
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-2/3 border-4 border-white p-5 outline-none rounded-2xl bg-transparent"
        />

        <button onClick={getSearchResult} className="border-2 p-3 my-24">
          Get Track
        </button>

        <audio ref={audioRef} src={searchResults} />

        <div className="absolute bottom-4">Atul Singh</div>
      </div>
    </>
  );
};

export default Search;
