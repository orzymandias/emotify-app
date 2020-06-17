const config = require('./utils/config');
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const cors = require('cors');

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static('./static'));
app.use(express.json());

app.use('/api', apiRouter);

app.get('/', (request, response) => {
  response.send('<h1>Hello Express, its me</h1>');
});

module.exports = app;
