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
    min_energy: 0.65,
    max_energy: 1,
    min_valence: 0,
    max_valence: 0.6,
  }, // anger
  1: {
    min_danceability: 0.3,
    max_danceability: 0.75,
    min_energy: 0.1,
    max_energy: 0.7,
    min_valence: 0,
    max_valence: 0.45,
  }, // fear
  2: {
    min_danceability: 0.5,
    max_danceability: 1,
    min_energy: 0.55,
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
    max_valence: 0.3,
  }, // sadness
};

/**
 * @constant seedSong
 * @constant seed ar
 * TODO: Refactor to ./services/config.js
 */
const seedAngerArtists = [
  "0X380XXQSNBYuleKzav5UO", // Nine Inch Nails
  "7dGJo4pcD2V6oG8kP0tJRR", // Eminem
  "40Yq4vzPs9VNUrIBG5Jr2i", // The Smashing Pumpkins
  "2YZyLoL8N0Wb9xBt1NhZWg", // Kendrick Lamar
  "7jy3rLJdDQY21OgRLCZ9sD", // Foo Fighters
  "053q0ukIDRgzwTr4vNSwab", // Grimes
  "23NIwARd4vPbxt3wwNnJ6k", // Parquet Courts
  "6XyY86QOPPrYVGvF9ch6wz", // Linkin Park
  "7oPftvlwr6VrsViSDV7fJY", // Green Day
  "5FWi1mowu6uiU2ZHwr1rby", // Feed Me
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
  "3BpUZB0tw4zNmG3Iw1mclL", // Soccer Mommy - Your Dog
  "33eq9vLMQ3boD0ZZ3Icw9o", // HAIM - The Steps
  "2Ptv2fH1GB41tTyL811Ag2", // Squid - Match Bet
  "67ftdeQCBBgd3rB78NVLr2", // Fiona Apple - Daredevil
  "1bxEpNR75Hq3T2oF9AZjt8", // Kendrick Lamar - u
  "7bHT9osSq1rwT2yaImzqCi", // Eminem - No Love
  "0JiY190vktuhSGN6aqJdrt", // P!nk - So What
  "3K4HG9evC7dg3N0R9cYqk4", // Linkin Park - One Step Closer
  "6nTiIhLmQ3FWhvrGafw2zj", // Green Day - American Idiot
  "6j0Q06QmlWdd8xlS8NrOhl", // Nine Inch Nails - Head Like A Hole
];

const seedFearArtists = [
  "0k17h0D3J5VfsdmQ1iZtE9", // Pink Floyd
  "3g2kUQ6tHLLbmkV7T4GPtL", // Fiona Apple
  "4Z8W4fKeB5YxbusRsdQVPb", // Radiohead
  "2wPDbhaGXCqROrVmwDdCrK", // Oneohtrix Point Never
  "1qiwaJwjKod5WhcYZ76O1B", // Tim Hecker
  "0wz0jO9anccPzH04N7FLBH", // Low
  "6qqNVTkY8uBg9cP3Jd7DAH", // Billie Eilish
  "0SwO7SWeDHJijQ3XNS7xEE", // MGMT
  "2x9SpqnPi8rlE9pjHBwmSC", // Talking Heads
  "4LEiUm1SRbFMgfqnQTwUbQ", // Bon Iver
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
  "6Gxheh3g2pTciG8jRI3n9X", // Tim Hecker - Live Room
  "62JdNf3y19hm3sQSiiI5S3", // John Carpenter - Night
  "4SSnFejRGlZikf02HLewEF", // Billie Eilish - bury a friend
  "3S2R0EVwBSAVMd5UMgKTL0", // Michael Jackson - Thriller
  "4eBCTzBsSjYgrLH5clQf2x", // Talking Heads - Born Under Punches
  "6zeE5tKyr8Nu882DQhhSQI", // Kansas - Dust in the Wind
  "1hHuyqVCZCbhYQixEkdQCo", // Muse - Sing for Absolution
  "2IZZqH4K02UIYg5EohpNHF", // The Cranberries - Zombie
  "1jJci4qxiYcOHhQR247rEU", // MGMT - Kids
  "49eWKHVsXw4lO2fUqjxIOx", // Ryuichi Sakamoto - fullmoon
];

const seedHappyArtists = [
  "4gzpq5DPGxSnKTe4SA8HAU", // Coldplay
  "5MmVJVhhYKQ86izuGHzJYA", // MIKA
  "6sFIWsNpZYqfjUpaCgueju", // Carly Rae Jepsen
  "0LcJLqbBmaGUft1e9Mm8HV", // ABBA
  "0QWrMNukfcVOmgEU0FEDyD", // Jacob Collier
  "0du5cEVh5yTK9QJze8zA0C", // Bruno Mars
  "21mKp7DqtSNHhCAU2ugvUw", // ODESZA
  "07QEuhtrNmmZ0zEcqE9SF6", // Owl City
  "5BvJzeQpmsdsFp4HGUYUEx", // Vampire Weekend
  "7gjAu1qr5C2grXeQFFOGeh", // Passion Pit
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
  "0ZVPABdzJEa0nG85uAlBjB", // Jacob Collier - With The Love In My Heart
  "2Gy7qnDwt8Z3MNxqat4CsK", // The Beach Boys - Wouldn't It Be Nice
  "6dGnYIeXmHdcikdzNNDMm2", // The Beatles - Here Comes The Sun
  "5a9BgulCg84pm4kgwGGArI", // Lionel Richie - All Night Long
  "7Cuk8jsPPoNYQWXK9XRFvG", // Earth, Wind & Fire - September
  "3LP8rsCH9nam9sou2MpgP5", // Above & Beyond - Prelude
  "1kPpge9JDLpcj15qgrPbYX", // Owl City - Good Time
  "5d6Mjuu2uCGRPYpFjGpCX5", // Maroon 5 - Sugar
  "0cqRj7pUJDkTCEsJkx8snD", // Taylor Swift - Shake It Off
  "516V4vS25xnGdVgkBWO6Wf", // The Avalanches - Since I Left You
];

const seedSadArtists = [
  "1r1uxoy19fzMxunt3ONAkG", // Phoebe Bridgers
  "4Z8W4fKeB5YxbusRsdQVPb", // Radiohead
  "2uYWxilOVlUdk4oV9DvwqK", // Mitski
  "00FQb4jTyendYWaN8pK0wa", // Lana Del Rey
  "1Xyo4u8uXC1ZmMpatF05PJ", // The Weeknd
  "4LEiUm1SRbFMgfqnQTwUbQ", // Bon Iver
  "0p4nmQO2msCgU4IF37Wi3j", // Avril Lavigne
  "4Sw0SFu1fFdYXdAEVdrqnO", // Mount Eerie
  "4MXUO7sVCaFgFjoTI5ox5c", // Sufjan Stevens
  "2ApaG60P4r0yhBoDCGD8YG", // Elliott Smith
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
  "0F4EoaMJmWNz8vS8tKgsqY", // Thom Yorke - Dawn Chorus
  "5Zz8mrmVVhOq3iuv8Gh0MX", // Daughter - Medicine
  "5NGtFXVpXSvwunEIGeviY3", // Erik Satie - Gymnopedie No. 1
  "6QPKYGnAW9QozVz2dSWqRg", // Adele - Someone Like You
  "6mFkJmJqdDVQ1REhVfGgd1", // Pink Floyd - Wish You Were Here
  "1XpYodsD36XN7ygcdF7mJJ", // Ed Sheeran - The A Team
  "3hRV0jL3vUpRrcy398teAU", // Lord Huron - The Night We Met
  "34oRN9NqGLPCrnC7SGrLZa", // Sufjan Stevens - Blue Bucket of Gold
  "11bD1JtSjlIgKgZG2134DZ", // Snow Patrol - Chasing Cars
  "0M3HkE321xpCbCYqVKzr1q", // Bruno Mars - It Will Rain
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
  return `${process.env.REACT_APP_HOST}/api/spotify/recommendations?seed_artists=${seedArtist}&seed_tracks=${seedTrack}&min_danceability=${min_danceability}&max_danceability=${max_danceability}&min_energy=${min_energy}&max_energy=${max_energy}&min_valence=${min_valence}&max_valence=${max_valence}&min_popularity=25&limit=${limit}`;
};
