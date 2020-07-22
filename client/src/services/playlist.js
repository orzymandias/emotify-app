/**
 * @description services/playlist.js for making external queries to spotify webapi for user playlists
 */
import axios from 'axios';
import { SPOTIFY_URI } from '../utils/Constants';

export const getPlaylists = (token) => {
  const options = {
    url: `${SPOTIFY_URI}/me/playlists`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios(options);
};

export const saveToPlaylist = (token, playlistID, trackID) => {
  const options = {
    url: `${SPOTIFY_URI}/playlists/${playlistID}/tracks`,
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: {
      uris: [`spotify:track:${trackID}`],
    },
  };
  return axios(options);
};
