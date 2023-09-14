import { useEffect, useState } from "react";
import UserLoader from "../Components/Loaders/UserLoader";

const User = () => {
  const [loading, setLoading] = useState(true); // Set Loading

  useEffect(() => {
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
          <div className="flex justify-center items-center bg-white rounded-xl text-black md:w-1/3 m-5">
            User
          </div>
          <div className="flex justify-center items-center bg-white rounded-xl text-black md:w-1/3 m-5">
            User
          </div>
        </>
      )}
    </>
  );
};

export default User;
