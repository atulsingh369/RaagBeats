const DisplayTrack = ({ currentTrack, audioRef }) => {
  return (
    <div className="w-11/12 my-5">
      <div
        style={{ backgroundImage: "url(" + `${currentTrack.thumbnail}` + ")" }}
        className="rounded-box bg-no-repeat bg-cover">
        <div className="flex h-96 rounded-box items-center backdrop-blur-md mb-8">
          <img
            className="max-h-full min-w-full object-cover rounded-box"
            src={currentTrack.thumbnail}
            alt="Thumbnail"
          />
        </div>
			</div>
			<p>{ currentTrack.title }</p>
			<p className="text-xl">{ currentTrack.author }</p>
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
};
export default DisplayTrack;
