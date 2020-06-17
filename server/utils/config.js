require('dotenv').config()

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_URI = process.env.SPOTIFY_URI
const EMOTIFY_MODEL = process.env.EMOTIFY_MODEL;
module.exports = {
  PORT,
  MONGODB_URI,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  SPOTIFY_URI,
  EMOTIFY_MODEL,
};
