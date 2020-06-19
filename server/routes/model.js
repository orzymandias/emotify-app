/* eslint-disable new-cap */
const predictRouter = require('express').Router();
const proxy = require('express-http-proxy');
const config = require('../utils/config');

// predictRouter.post('*', async (req, res) => {
//   try {
//     const options = {
//       url: config.EMOTIFY_MODEL+'/predict',
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: {
//         feature: req.body.feature,
//       },
//     };
//     const response = await axios(options);
//     res.json(CircularJSON.stringify(response));
//   } catch (error) {
//     res.status(500).json({message: error});
//   }
// });

predictRouter.use(
  '/',
  proxy(config.EMOTIFY_MODEL, {
    proxyReqPathResolver(req) {
      console.log('req', req);
      return req.url;
    },
  })
);

module.exports = predictRouter;
