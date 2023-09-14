import { useEffect, useState } from "react";
import SettingLoader from "../Components/Loaders/SettingLoader";

const Setting = ({ setMiniPlayer }) => {
  const [loading, setLoading] = useState(true); // Set Loading
  setMiniPlayer(false);

  useEffect(() => {
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
          <div className="flex justify-center items-center bg-white rounded-xl text-black md:w-1/3 m-5">
            Setting
          </div>
          <div className="flex justify-center items-center bg-white rounded-xl text-black md:w-1/3 m-5">
            Setting
          </div>
        </>
      )}
    </>
  );
};

export default Setting;
