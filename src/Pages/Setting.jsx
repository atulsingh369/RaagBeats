import { useEffect, useState } from "react";
import SettingLoader from "../Components/Loaders/SettingLoader";

const Setting = ({ setMiniPlayer }) => {
  const [loading, setLoading] = useState(true); // Set Loading

  useEffect(() => {
    setMiniPlayer(false);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <SettingLoader />
      ) : (
        <>
          <div className="p-5 items-center bg-white rounded-box text-secondary md:w-1/3 m-5">
            {/* Insert a Vector Art here.. */}
            <p className="text-center">More on Next Update</p>
            <p className="text-center">
              Till then, <span>Stay Tuned...</span>
            </p>
            <p className="text-center">😊 Follow me on Socials 😊</p>
            {/* icons */}
            <div></div>
            {/* <img
              src="https://ik.imagekit.io/xji6otwwkb/Portfolio/Profile.png?updatedAt=1689797021415"
              alt="Developer"
              className="rounded-box bg-cover"
            /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Setting;
