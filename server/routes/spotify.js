/* eslint-disable no-async-promise-executor */
const spotifyRouter = require('express').Router();
const proxy = require('express-http-proxy');
const config = require('../utils/config');
const { getAccessCode } = require('../utils/spotify_client_auth');

spotifyRouter.use(
  '/',
  proxy(config.SPOTIFY_URI, {
    proxyReqPathResolver(req) {
      return `/v1${req.url}`;
    },
    // eslint-disable-next-line no-unused-vars
    proxyReqOptDecorator: (proxyReqOpts, srcReq) =>
      // eslint-disable-next-line no-unused-vars
      new Promise(async (resolve, reject) => {
        const token = await getAccessCode();
        // eslint-disable-next-line no-param-reassign
        proxyReqOpts.headers.Authorization = `Bearer ${token}`;
        resolve(proxyReqOpts);
      }),
  })
);

module.exports = spotifyRouter;
