/* eslint-disable indent */
const axios = require('axios');
const config = require('./config');

const options = {
  url: 'https://accounts.spotify.com/api/token',
  method: 'post',
  params: {
    grant_type: 'client_credentials',
  },
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  auth: {
    username: config.SPOTIFY_CLIENT_ID,
    password: config.SPOTIFY_CLIENT_SECRET,
  },
};

const getAccessCode = async () => {
  try {
    const response = await axios(options);
    return response.data.access_token;
  } catch (error) {
    console.log('getAccessCode', error);
  }
};


const authenticateClient = async (req, res, next) => {
//   try {
//     const token = await getAccessCode();
//     console.log('token', token);
//     const options = {
//       url: config.SPOTIFY_URI + `/${req.params[0]}`,
//       method: 'get',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     };
//     const response =  await axios(options);
//     res.set (response.headers)
//     res.set(response.body);
//     res.send()
//     next();
//   } catch (error) {
//     res.status(500).send(error)
//   }
};

module.exports = {
  getAccessCode,
  // authenticateClient,
};
