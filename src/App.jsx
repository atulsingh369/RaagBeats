import React from "react";
import AudioPlayer from "./Components/AudioPlayer";

export default function App() {
  return (
    <>
      <React.StrictMode>
        <div className=" bg-secondary h-screen text-white">
          <div>Content</div>
        </div>
        <AudioPlayer />
      </React.StrictMode>
    </>
  );
}
