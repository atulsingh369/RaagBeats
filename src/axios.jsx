import axios from "axios";
// import cors from "cors";

// const baseURL = "https://accounts.spotify.com";
// var corsOptions = {
//   origin: "http://localhost:5173/",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// Get Access token from Spotify
export const getAccessToken = async () => {
  try {
    const { data } = await axios.post(
      `https://accounts.spotify.com/api/token`,
      {
        grant_type: "client_credentials",
        client_id: "f2957fbb0ddb4e0b92ec7663ac1b76ab",
        client_secret: "e0e24a9a9c364964915640742f1e879d",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

// Get Track for particular id with the access token
export const getTrack = async (token) => {
  try {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbN",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
