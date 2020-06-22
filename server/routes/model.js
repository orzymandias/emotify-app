/* eslint-disable new-cap */
const predictRouter = require('express').Router();
const proxy = require('express-http-proxy');
const axios = require('axios');
const config = require('../utils/config');

predictRouter.get('*', async (req, res) => {
  try {
    const options = {
      url: config.EMOTIFY_MODEL,
      method: 'get',
    };
    const response = await axios(options);
    res.status(200).json({ message: 'model awake' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

predictRouter.use(
  '/',
  proxy(config.EMOTIFY_MODEL, {
    proxyReqPathResolver(req) {
      return req.url;
    },
  })
);

module.exports = predictRouter;
