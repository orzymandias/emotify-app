/**
 * @constant emotionMapping: Key indicates emotion: anger, fear , happiness, sadness respectively
 * value indicates {valence_score, tempo}
 *
 * TODO: Function which returns emotion mapping with random valence and tempo scores using randomise method
 * RANDOMISE METHOD: range Math.random() * ( 0.3 ) + low 0.2 to 0.4/ mid 0.4 to 0.6/high 0.7 to 0.9
 *
 * MAYBE: add more parameters for emotion mapping (refer to spotify API)
 * MAYBE: Document this mapping in milestone documentation/README
 * MAYBE: Refactor this into a services/config.js
 */

export const emotionMapping = {
  0: { valence: 0.2, tempo: 0.7 },
  1: { valence: 0.5, tempo: 0.7 },
  2: { valence: 0.7, tempo: 0.1 }, // could be any random tempo
  3: { valence: 0.2, tempo: 0.2 },
};

/**
 * @constant seedSong
 * @constant seed ar
 * TODO: Populate around 10 seed songs and artists
 * TODO: Refactor to ./services/config.js
 */
export const seedArtists = ['4NHQUGzhtTLFvgF5SZesLK'];
export const seedTracks = ['0c6xIDDpzE81m2q797ordA'];

/**
 * Generate recommendation URL based on emotion and other parameters
 * @param {number} emotion 0: anger, 1: fear , 2: happiness, 3: sadness
 * @param {string} seedArtist
 * @param {string} seedTrack
 *
 * TODO: Add more query parameters to URL such as genres, dancibility etc
 * Refactor to service/config.js
 */
export const generateRecommendUrl = (emotion, seedArtist, seedTrack, limit) => {
  const tempo = emotionMapping[emotion]['tempo'];
  const valence = emotionMapping[emotion]['valence'];
  return `${process.env.REACT_APP_HOST}/api/spotify/recommendations?seed_artists=${seedArtist}&seed_tracks=${seedTrack}&min_tempo=${tempo}&min_valence=${valence}&min_popularity=50&limit=${limit}`;
};
