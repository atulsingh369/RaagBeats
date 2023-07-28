import React from "react";
import AudioPlayer from "./Components/AudioPlayer";
import SideBar from "./Components/SideBar";

export default function App() {
  return (
    <>
      <React.StrictMode>
        <div className=" bg-secondary h-screen text-white">
          <SideBar />
          <AudioPlayer />
        </div>
      </React.StrictMode>
    </>
  );
}
