/* eslint-disable new-cap */
const predictRouter = require('express').Router();
const config = require('../utils/config');
const CircularJSON = require('circular-json');
const axios = require('axios');

predictRouter.post('*', async (req, res) => {
  try {
    const options = {
      url: config.EMOTIFY_MODEL+'/predict',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        feature: req.body.feature,
      },
    };
    const response = await axios(options);
    res.json(CircularJSON.stringify(response));
  } catch (error) {
    res.status(500).json({message: error});
  }
});

predictRouter.get('*', async (req, res) => {
  try {
    const options = {
      url: config.EMOTIFY_MODEL,
      method: 'get',
    };
    const response = await axios(options);
    res.status(200).end();
  } catch (err) {
    res.status(500).json({message: err});
    next(err);
  }
});

module.exports = predictRouter;
