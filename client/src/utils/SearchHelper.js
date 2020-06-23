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
  0: {
    min_danceability: 0.4,
    max_danceability: 0.8,
    min_energy: 0.6,
    max_energy: 1,
    min_valence: 0,
    max_valence: 0.75,
  }, // anger
  1: {
    min_danceability: 0.4,
    max_danceability: 0.7,
    min_energy: 0.1,
    max_energy: 0.7,
    min_valence: 0,
    max_valence: 0.45,
  }, // fear
  2: {
    min_danceability: 0.5,
    max_danceability: 1,
    min_energy: 0.65,
    max_energy: 1,
    min_valence: 0.7,
    max_valence: 1,
  }, // happiness
  3: {
    min_danceability: 0,
    max_danceability: 0.5,
    min_energy: 0,
    max_energy: 0.5,
    min_valence: 0,
    max_valence: 0.2,
  }, // sadness
};

/**
 * @constant seedSong
 * @constant seed ar
 * TODO: Populate around 10 seed songs and artists
 * TODO: Refactor to ./services/config.js
 */
const seedAngerArtists = [
  "23NIwARd4vPbxt3wwNnJ6k", // Parquet Courts
  "7dGJo4pcD2V6oG8kP0tJRR", // Eminem
  "40Yq4vzPs9VNUrIBG5Jr2i", // The Smashing Pumpkins
  "2YZyLoL8N0Wb9xBt1NhZWg", // Kendrick Lamar
  "7jy3rLJdDQY21OgRLCZ9sD", // Foo Fighters
];
const seedAngerTracks = [
  "2gQaQUhDCNGfBVXTvxAmXQ", // Tears for Fears - Shout
  "3kVRKixPYEjrerKc0MZPdK", // The White Stripes - Seven Nation Army
  "3ERlkLtr5K5C7VUqlDcNSR", // The 1975 - People
  "3iXCFenXZlNm5rZHdkaGCo", // U.S. Girls - Rage of Plastics
  "0EaLRxrtnq7Mqhdf8q9txr", // Pink Floyd - Run Like Hell
  "5b0DJPEs6UUlDmpZuoDD2X", // Grimes, HANA - We Appreciate Power
  "2NtGIXleTQVNZouLU2Icyj", // Oneohtrix Point Never - We'll Take It
  "5pfERhAfhpscnAKQnZgnaC", // Parquet Courts - Violence
  "3l9CW99AHtExIRV4hW2N5m", // Paramore - Misery Business
  "09BTtHe9KBlWe05hm9rbn2", // Tim Hecker - Stab Variation
];

const seedFearArtists = [
  "0k17h0D3J5VfsdmQ1iZtE9", // Pink Floyd
  "3g2kUQ6tHLLbmkV7T4GPtL", // Fiona Apple
  "4Z8W4fKeB5YxbusRsdQVPb", // Radiohead
  "2wPDbhaGXCqROrVmwDdCrK", // Oneohtrix Point Never
  "1qiwaJwjKod5WhcYZ76O1B", // Tim Hecker
];
const seedFearTracks = [
  "2q3s94g1UFU90IinOiFmDQ", // The 1975 - Playing On My Mind
  "1GEOSS415bZVHNuXWlCT6b", // Pink Floyd - Mother
  "6HPZo9krwjbhMGKbqVkkDQ", // Fiona Apply - Every Single Night
  "0R332cdlS9LyE0Ge2PSlVC", // Radiohead - Climbing Up the Walls
  "544wUGXgCtJX8Kgaa1iNyn", // Low - Poor Sucker
  "3pvmkjuacq6719H5su9ixl", // Beach House - Black Car
  "3cdOzZDA1GSURHEzQNZcNe", // Oneohtrix Point Never - Warning
  "3JOVTQ5h8HGFnDdp4VT3MP", // Gary Jules - Mad World
  "5fJKYUXB7Me0V0QnKNaIil", // Nothing But Thieves - Excuse Me
  "3mAIoiFJ3PG1HjOY93ShOt", // Objekt - Rest Yr Troubles Over Me
];

const seedHappyArtists = [
  "4gzpq5DPGxSnKTe4SA8HAU", // Coldplay
  "5MmVJVhhYKQ86izuGHzJYA", // Mika
  "6sFIWsNpZYqfjUpaCgueju", // Carly Rae Jepsen
  "0LcJLqbBmaGUft1e9Mm8HV", // ABBA
  "0QWrMNukfcVOmgEU0FEDyD", // Jacob Collier
];
const seedHappyTracks = [
  "6f49kbOuQSOsStBpyGvQfA", // Coldplay - A Head Full of Dreams
  "60nZcImufyMA1MKQY3dcCH", // Pharrell Williams - Happy
  "6JV2JOEocMgcZxYSZelKcc", // Justin Timberlake - CAN'T STOP THE FEELING!
  "5haXbSJqjjM0TCJ5XkfEaC", // James Brown - I Got You (I Feel Good)
  "4m6AKNNWgzTwnHUZxLMjRj", // MIKA - Celebrate
  "05wIrZSwuaVWhcv5FfqeH0", // Katrina & The Waves - Walking on Sunshine
  "20I6sIOMTCkB6w7ryavxtO", // Carly Rae Jepsen - Call Me Maybe
  "2TxCwUlqaOH3TIyJqGgR91", // ABBA - Mamma Mia
  "2wYKNcoqKW4IEcllj42xz1", // CHIC - Good Times
  "310xF17abXDaKlq0gwv50l", // ODESZA - Sundara
];

const seedSadArtists = [
  "1r1uxoy19fzMxunt3ONAkG", // Phoebe Bridgers
  "4Z8W4fKeB5YxbusRsdQVPb", // Radiohead
  "2uYWxilOVlUdk4oV9DvwqK", // Mitski
  "00FQb4jTyendYWaN8pK0wa", // Lana Del Rey
  "1Xyo4u8uXC1ZmMpatF05PJ", // The Weeknd
];
const seedSadTracks = [
  "5YZ1S9UfTHUxuIF3eTIGGf", // Jon Hopkins- Abandon Window
  "5g97GAdru7XfeJyJhViIll", // Phoebe Bridgers - Smoke Signals
  "3O2pB9JHreUZ9F83qSNmu8", // Nothing But Thieves - If I Get High
  "6cqXhzuVIH4Hm2CkF7ZN21", // Deerhunter - Helicopter
  "01ZpFhrMMqKPVCwyqXneVp", // Radiohead - True Love Waits
  "18Zr5WWu7X9LVool3pJRum", // Mitski - Two Slow Dancers
  "5TvE3pk05pyFIGdSY9j4DJ", // A Great Big World - Say Something
  "2nMeu6UenVvwUktBCpLMK9", // Lana Del Rey - Young and Beautiful
  "7LVHVU3tWfcxj5aiPFEW4Q", // Coldplay - Fix You
  "0NlGoUyOJSuSHmngoibVAs", // Kodaline - All I Want
];

export const seedArtists = [
  seedAngerArtists,
  seedFearArtists,
  seedHappyArtists,
  seedSadArtists,
];
export const seedTracks = [
  seedAngerTracks,
  seedFearTracks,
  seedHappyTracks,
  seedSadTracks,
];

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
  const min_danceability = emotionMapping[emotion]["min_danceability"];
  const max_danceability = emotionMapping[emotion]["max_danceability"];
  const min_energy = emotionMapping[emotion]["min_energy"];
  const max_energy = emotionMapping[emotion]["max_energy"];
  const min_valence = emotionMapping[emotion]["min_valence"];
  const max_valence = emotionMapping[emotion]["max_valence"];
  return `${process.env.REACT_APP_HOST}/api/spotify/recommendations?seed_artists=${seedArtist}&seed_tracks=${seedTrack}&min_danceability=${min_danceability}&max_danceability=${max_danceability}&min_energy=${min_energy}&max_energy=${max_energy}&min_valence=${min_valence}&max_valence=${max_valence}&min_popularity=50&limit=${limit}`;
};
