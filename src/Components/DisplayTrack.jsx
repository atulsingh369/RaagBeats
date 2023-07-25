const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div>
      <div className="flex h-96 w-96 items-center">
        <img
          className="max-h-full min-w-full object-cover"
          src={currentTrack.thumbnail}
          alt="Thumbnail"
        />
      </div>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
};
export default DisplayTrack;
