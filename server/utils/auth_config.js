const chalk = require('chalk');
const mongoose = require('mongoose');
const SpotifyStrategy = require('passport-spotify').Strategy;
const config = require('./config.js');

// User Model
let User = require('../models/User.js');

module.exports = (passport) => {
  /**
   * For sessions. not necessary.
   */
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(
    new SpotifyStrategy(
      {
        clientID: config.SPOTIFY_CLIENT_ID,
        clientSecret: config.SPOTIFY_CLIENT_SECRET,
        callbackURL: '/auth/spotify/callback',
      },
      (accessToken, refreshToken, expiresIn, profile, done) => {
        // include logic for storing user maybe?
        console.log(chalk.green(JSON.stringify(accessToken)));
        console.log(chalk.red(JSON.stringify(profile)));
        console.log(chalk.blueBright(JSON.stringify(expiresIn)));
        // set up implicit code grant
        return done(null, profile, accessToken, refreshToken);
      }
    )
  );
};
