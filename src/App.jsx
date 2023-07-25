import React from "react";
import AudioPlayer from "./Components/AudioPlayer";

export default function App() {
  return (
    <>
      <React.StrictMode>
        <div className="flex bg-secondary justify-center items-center h-screen text-2xl font-semibold">
          <div className="text-white">Content</div>
          <AudioPlayer />
        </div>
      </React.StrictMode>
    </>
  );
}
