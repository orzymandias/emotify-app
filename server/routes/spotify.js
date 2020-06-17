const spotifyRouter = require('express').Router();
const clientHandler = require('../utils/spotify_client_auth');

spotifyRouter.all('/*', clientHandler.authenticateClient, (req, res) => {
  // res.json(res.locals);
});

module.exports = spotifyRouter;
