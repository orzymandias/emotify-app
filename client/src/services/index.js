/**
 * @description services/index.js for making external queries to proxy server
 */
import axios from "axios";
import {
  seedArtists,
  seedTracks,
  generateRecommendUrl,
} from "../utils/SearchHelper";

/**
 * Makes POST request to model endpoint for prediction
 * @param {string} feature  - textual feature input by user in search bar
 * @returns {Promise} with prediction object
 */
export const postText = (feature) => {
  const options = {
    url: `${process.env.REACT_APP_HOST}/api/model/predict`,
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      feature,
    },
  };
  return axios(options);
};

const NUMARTISTS = 10;
const NUMTRACKS = 20;
const MAXARTISTINDEX = NUMARTISTS - 1;
const MAXTRACKINDEX = NUMTRACKS - 1;
const NUMRESULTS = 9;

/**
 * Fetch recommended music from spotify based on emotion
 * @returns Promise with recommendation object
 *
 * TODO: Implement dynamic generation of seedSong and seedArtist
 */

export const getRecommendation = (emotion) => {
  const seedArtistIndex = Math.round(Math.random() * MAXARTISTINDEX);
  const seedTrackIndex = Math.round(Math.random() * MAXTRACKINDEX);
  const url = generateRecommendUrl(
    emotion,
    seedArtists[emotion][seedArtistIndex],
    seedTracks[emotion][seedTrackIndex],
    NUMRESULTS
  );
  const options = {
    url,
    method: "get",
  };
  return axios(options);
};

export const getUser = (feature) => {
  const options = {
    url: `${process.env.REACT_APP_HOST}/user`,
    method: "get",
  };
  return axios(options);
};

export const loginSpotify = () => {
  return axios.get(`${process.env.REACT_APP_HOST}/auth/spotify`);
};
