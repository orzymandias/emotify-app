const config = require('./utils/config');
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const spotifyRouter = require('./routes/spotify')
const cors = require('cors');
const proxy = require('express-http-proxy')


const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('./static'));

/**
 * express body parser changes req stream to object. 
 * You either buffer req or deal with raw req before parsing 
 */
app.use('/api/spotify', spotifyRouter)
app.use(express.json());
app.use('/api', apiRouter);
app.get('/', (req, res) => {
  res.send("Welcome to the server")
})


module.exports = app;
