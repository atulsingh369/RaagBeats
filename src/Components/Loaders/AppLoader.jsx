import { Fade } from "react-awesome-reveal";
import "./apploader.css";
import Welcome from "./Welcome Tune.mp3";
import { useEffect, useRef, useState } from "react";

const AppLoader = () => {
  const [play, setPlay] = useState(false);
  const appRef = useRef();

  useEffect(() => {
    play && appRef.current.play();
  });

  return (
    <>
      <div className="bg-secondary" onClick={() => setPlay(true)}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="h-screen w-screen flex flex-col justify-center items-center">
          <Fade>
            {/* RaggBeats Logo */}
            <img
              src="https://ik.imagekit.io/xji6otwwkb/RaagBeats/output-onlinegiftools%20(1).gif?updatedAt=1694679974923"
              alt="Welcome To RaggBeats"
            />
          </Fade>
          <Fade delay={30}>
            {/* RaggBeats Name */}
            <div className="my-32 lg:my-40">
              <div data-glitch="RaagBeats" className="glitch">
                RaagBeats
              </div>
            </div>
          </Fade>

          <div className="fixed bottom-0">
            <p className="flex justify-center items-center text-lg md:text-xl font-semibold text-white">
              Built with ❤️ By Atul Singh
            </p>
          </div>
        </div>
      </div>

      <audio ref={appRef} autoPlay={true} src={Welcome} loop={true} />
    </>
  );
};

export default AppLoader;
