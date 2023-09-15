import { useEffect, useState } from "react";
import SettingLoader from "../Components/Loaders/SettingLoader";
import CheckBox from "../Components/Togglers/CheckBox";
import DataSaver from "../Components/Togglers/DataSaver";
import AudioCheck from "../Components/Togglers/AuidoCheck";
import { JackInTheBox } from "react-awesome-reveal";

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
          <div className="lg:p-10 bg-black text-white rounded-box lg:text-2xl border-2 w-screen m-2 lg:w-2/3 border-white space-y-12">
            <p className="animate__animated animate__bounceIn text-center text-lg lg:text-2xl lg:mt-0 mt-8 font-bold">
              Account Type : Guest
            </p>

            {/* settings */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-48 w-full my-10">
              {/* 1st block */}
              <div className="space-y-12">
                <JackInTheBox cascade={true}>
                  <div className="flex justify-between px-2">
                    <p>Audio Quality</p>
                    <AudioCheck />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <p>Auto Mix</p>
                    <CheckBox />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <p>Gapless</p>
                    <CheckBox />
                  </div>
                </JackInTheBox>
              </div>

              {/* 2nd block */}
              <div className="space-y-12">
                <JackInTheBox cascade={true}>
                  <div className="flex justify-between items-center px-2">
                    <p>Data Saver</p>
                    <DataSaver />
                  </div>
                  <div className="flex justify-between items-center px-2">
                    <p>Normalize Volume</p>
                    <CheckBox />
                  </div>
                  <div className="flex justify-between items-center p-2">
                    <p>Crossfade</p>
                    <CheckBox />
                  </div>
                </JackInTheBox>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Setting;
