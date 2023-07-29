import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap w-full text-black">
        <Fade direction="right">
          <div className="bg-white rounded-xl">Home</div>
        </Fade>
        <Fade direction="right" delay="10">
          <div className="bg-white rounded-xl">Home</div>
        </Fade>	
      </div>
    </>
  );
};

export default Home;
