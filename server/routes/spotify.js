const spotifyRouter = require('express').Router();
const proxy = require('express-http-proxy')
const config = require('../utils/config')
const { getAccessCode } = require('../utils/spotify_client_auth');


spotifyRouter.use('/', proxy(config.SPOTIFY_URI  , {
  proxyReqPathResolver: function (req) {
    console.log('requrl', req.url)
    return `/v1${req.url}`
  },
  proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
    return new Promise(async (resolve, reject) => {
      const token = await getAccessCode()
      proxyReqOpts.headers['Authorization'] = `Bearer ${token}`;
      resolve(proxyReqOpts);
    })
  }
}));

module.exports = spotifyRouter;
