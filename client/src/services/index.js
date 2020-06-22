/**
 * @description services.js for making external queries
 */
import axios from 'axios';
import {
  seedArtists,
  seedTracks,
  generateRecommendUrl,
} from '../utils/SearchHelper';

/**
 * Makes POST request to model endpoint for prediction
 * @param {string} feature  - textual feature input by user in search bar
 * @returns {Promise} with prediction object
 */
export const postText = (feature) => {
  const options = {
    url: `${process.env.REACT_APP_HOST}/api/model/predict`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      feature,
    },
  };
  return axios(options);
};

/**
 * Fetch recommended music from spotify based on emotion
 * @returns Promise with recommendation object
 *
 * TODO: Implement dynamic generation of seedSong and seedArtist
 */

export const getRecommendation = (emotion) => {
  const url = generateRecommendUrl(emotion, seedArtists[0], seedTracks[0], 10);
  const options = {
    url,
    method: 'get',
  };
  return axios(options);
};
