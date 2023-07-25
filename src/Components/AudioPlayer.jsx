import Controls from "./Controls";
import DisplayTrack from "./DisplayTrack";
import ProgressBar from "./ProgressBar";

const AudioPlayer = () => {
  return (
    <div className="flex p-5 border-2 rounded-xl border-black w-fit flex-col items-center">
      <DisplayTrack />
      <Controls />
      <ProgressBar />
    </div>
  );
};
export default AudioPlayer;
