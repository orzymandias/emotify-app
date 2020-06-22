// eslint-disable-next-line new-cap
const apiRouter = require('express').Router();
apiRouter.use('/spotify', require('./spotify'));
apiRouter.use('/model', require('./model'));

module.exports = apiRouter;
