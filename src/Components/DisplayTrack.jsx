import { BsMusicNoteBeamed } from "react-icons/bs";

const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div className="w-10/12 my-5 flex items-center flex-col md:flex-row justify-evenly">
      <div
        style={{
          backgroundImage: "url(" + `${currentTrack.thumbnail}` + ")",
          backgroundColor: "#000",
        }}
        className="flex md:w-fit md:animate-spin-slow w-full items-center justify-center rounded-box md:rounded-full bg-no-repeat bg-cover mb-8">
        {currentTrack.thumbnail ? (
          <div className="flex h-96 md:w-24 md:h-24 w-full rounded-box md:rounded-full items-center backdrop-blur-md">
            <img
              className="max-h-full min-w-full object-contain rounded-box md:rounded-full"
              src={currentTrack.thumbnail}
              alt="Thumbnail"
            />
          </div>
        ) : (
          <BsMusicNoteBeamed className="text-7xl text-white my-24" />
        )}
      </div>
      <div className="space-y-2">
        <p className="text-center">{currentTrack.title}</p>
        <p className="text-xl text-center">{currentTrack.author}</p>
      </div>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
};
export default DisplayTrack;
