const ProgressBar = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center p-5">
        <div>0:00</div>
        <div className="w-9/12 bg-primary rounded-full h-1">
          <div className="bg-white w-1/2 h-full rounded-full"></div>
        </div>
        <div>5:00</div>
      </div>
    </>
  );
};
export default ProgressBar;
