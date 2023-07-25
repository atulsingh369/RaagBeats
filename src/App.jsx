import React from "react";
import AudioPlayer from "./Components/AudioPlayer";

export default function App() {
  return (
    <>
      <React.StrictMode>
        <div className="flex justify-center items-center h-screen text-2xl font-semibold">
          <AudioPlayer />
        </div>
      </React.StrictMode>
    </>
  );
}
