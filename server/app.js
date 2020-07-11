const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const apiRouter = require('./routes');
const spotifyRouter = require('./routes/spotify');
const config = require('./utils/config');
const chalk = require('chalk');

// passport config
require('./utils/auth_config')(passport);

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(passport.initialize());
app.use(express.static('./static'));
app.use(express.static('build'));

/**
 * express body parser changes req stream to object.
 * You either buffer req or deal with raw req before parsing
 */
app.use('/api/spotify', spotifyRouter);
app.use(express.json());
app.use('/api', apiRouter);
app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

app.get('/auth/spotify', passport.authenticate('spotify'));
// On authentication, the client is suppose to make href to the redirect path, while storing accesstoken to state

app.get(
  '/auth/spotify/callback',
  passport.authenticate('spotify', { failureRedirect: '/login' }),
  (req, res) => {
    // res.json({ accessToken: req.authInfo, user: req.user, redirect_path: '/' });
    return res.redirect(
      `${config.CLIENT_URL}?user=${req.user.username}&token=${req.authInfo}`
    );
  }
);

app.get('/auth/logout', (req, res) => {
  res.redirect('/');
});
module.exports = app;
