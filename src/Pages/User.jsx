import { useEffect, useState } from "react";
import UserLoader from "../Components/Loaders/UserLoader";
import { Bounce, JackInTheBox, Roll} from "react-awesome-reveal";

const User = ({ setMiniPlayer, setLike, setUser, setSearch }) => {
  const [loading, setLoading] = useState(true); // Set Loading

  useEffect(() => {
    setMiniPlayer(false);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <UserLoader />
      ) : (
        <>
          <div className="px-5 my-5 mx-auto flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center rounded-box text-secondary lg:bg-white lg:w-3/4">
            {/* User */}
            <div className="relative flex flex-col items-center lg:w-1/2 w-full bg-white rounded-box pb-5">
              <JackInTheBox>
                {/* Vector Art*/}
                <img
                  src="https://ik.imagekit.io/xji6otwwkb/RaagBeats/userAvatar.gif?updatedAt=1694768510230"
                  alt="Profile"
                />
              </JackInTheBox>
              <p className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-xl font-semibold">
                Guest User
              </p>
              {/* buttons */}
              <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 justify-evenly items-center w-full">
                <Bounce cascade={true}>
                  <button
                    onClick={() => {
                      setLike(true);
                      setUser(false);
                    }}
                    className="p-2 text-xl rounded-box font-semibold border-4 border-icons hover:bg-dark hover:text-white">
                    Favourites
                  </button>
                  <button
                    onClick={() => {
                      setSearch(true);
                      setUser(false);
                    }}
                    className="p-2 text-xl rounded-box font-semibold border-4 border-icons hover:bg-dark hover:text-white">
                    More . .
                  </button>
                </Bounce>
              </div>
            </div>

            {/* Follow Request */}

            <div className="p-5 flex flex-col items-center lg:w-1/2 w-full bg-white rounded-box space-y-4 lg:text-2xl font-semibold">
              {/* Vector Art*/}
              <img
                src="https://ik.imagekit.io/xji6otwwkb/RaagBeats/User.gif?updatedAt=1694761865113"
                alt="userVector"
                className="lg:w-96"
              />

              <p>More on Next Update</p>
              <p>Till then, Stay Tuned...</p>
              <p>😊 Follow me on Socials 😊</p>
              {/* icons */}
              <div className="flex justify-evenly items-center w-full lg:w-1/2">
                <Roll cascade={true}>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/atulsingh369/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      className="hover:bg-[#0A66C2] bg-secondary rounded-full p-2"
                      viewBox="0 0 24 24">
                      <path
                        fill="white"
                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                      />
                    </svg>
                  </a>

                  {/* Github */}
                  <a
                    href="https://github.com/atulsingh369"
                    rel="noopener noreferrer"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      className="hover:bg-black bg-secondary rounded-full p-2"
                      viewBox="0 0 24 24">
                      <path
                        fill="white"
                        d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                      />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/iam.atul.singh/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      className="bg-secondary rounded-full p-2 bgColor"
                      viewBox="0 0 24 24">
                      <path
                        fill="white"
                        d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"
                      />
                    </svg>
                  </a>
                </Roll>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default User;
