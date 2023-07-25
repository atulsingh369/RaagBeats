import { BsMusicNoteBeamed } from "react-icons/bs";

const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div className="w-11/12 my-5">
      <div
        style={{
					backgroundImage: "url(" + `${currentTrack.thumbnail}` + ")",
					backgroundColor : "#000"
        }}
        className="flex items-center justify-center rounded-box bg-no-repeat bg-cover mb-8">
        {currentTrack.thumbnail ? (
          <div className="flex h-96 w-full rounded-box items-center backdrop-blur-md">
            <img
              className="max-h-full min-w-full object-contain rounded-box"
              src={currentTrack.thumbnail}
              alt="Thumbnail"
            />
          </div>
        ) : (
          <BsMusicNoteBeamed className="text-7xl text-white my-24"/>
        )}
      </div>
      <p>{currentTrack.title}</p>
      <p className="text-xl">{currentTrack.author}</p>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
};
export default DisplayTrack;
