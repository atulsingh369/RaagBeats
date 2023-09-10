import axios from "axios";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const Home = ({ token }) => {
  const [res, setRes] = useState([]);

  // Dashavtar - 7cEbOdPHth4Ca2Qejq55if
  // Fuk Fuk Fukrey - 3QNB3V1DAdWp7WgbV8wJj8
  // Keh Ke Lunga - 7ufAXG1jLMdzuQDqIrJ2Le
  // Jiya Tu - 2tyB5vHCjgveVixv6i16xJ
  // Issa Vibe - 0PjlMtYAIBnCRajbUceZgc
  // Pungi - 4St20qfnH98z2CEY7Up5yn

  const getTrack = async () => {
		try {
			
      const { data } = await axios.get(
        `https://api.spotify.com/v1/browse/new-releases?country=IN`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(data);
      // setRes([res, ...data.tracks.items]);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrack();
  }, []);

  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap w-full text-black">
        <Fade direction="right">
          <div className="bg-white rounded-xl"></div>
        </Fade>
        <Fade direction="right" delay="10">
          <div className="bg-white rounded-xl">Home</div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
