/**
 * @description services/userLibrary.js for making external queries to spotify webapi for user's library
 */
import axios from "axios";
import { SPOTIFY_URI } from "../utils/Constants";

export const getUserLibrary = (token) => {
  const options = {
    url: `${SPOTIFY_URI}/me/tracks`,
    method: "get",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios(options);
};
