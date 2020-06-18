/* eslint-disable new-cap */
const predictRouter = require('express').Router();
const config = require('../utils/config');
const proxy = require('express-http-proxy');


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

predictRouter.use('/', proxy(config.EMOTIFY_MODEL, {
  proxyReqPathResolver: function (req) {
    console.log(req.url)
    return req.url
  }
}));


module.exports = predictRouter;
