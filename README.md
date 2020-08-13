# Emotify-App

> Emotify is a music recommendation service. It allows users to input any piece of text and through emotion analysis, it will generate a selection of songs that match the emotional content of the text. This repository in contains both frontend and server side code.
 Try it here: https://emotify.netlify.app


[![Build Status](https://travis-ci.org/orzymandias/emotify-app.svg?branch=master)](https://travis-ci.org/orzymandias/emotify-app)

[![INSERT YOUR GRAPHIC HERE](https://i.imgur.com/7TFeVYx.jpg)](https://i.imgur.com/7TFeVYx.jpg)

## Features

- **Main search functionality**
  - What it is: The main feature where users can retrieve music based on emotion analysis of their input text.
  - The Emotify model is available [here](https://github.com/orzymandias/emotify-model).

- **Ability to run Emotify on your own Spotify library**
  - What it is: Users can choose to use Emotify’s search functionality to search for music within their own Spotify listening history and enjoy Emotify’s search functionality for music that they already know and love.

- **Add track to Spotify playlist**
  - What it is: Users can log in to Spotify within Emotify and add tracks from the results page directly to their Spotify playlists.


## Getting Started

### Installation

1. Install a stable version of NodeJS.
2. Clone this repository `git clone https://github.com/orzymandias/emotify-app.git` and navigate into repo `cd emotify-app`
3. Run `yarn / npm install` to install dependencies in root directory.
4. `cd` into `/client` and run `yarn / npm install`.
5. Run `yarn run dev / npm run dev` to start the server at `localhost:8000`.

### Setting up your environment

The project requires some environment variables to be set to work properly. In the `.env` file a few things need to be set up:

## Development

### Running the tests

Before pushing to Github, ensure that your code is formatted and your tests are passing. These two commands should help with that:

- `yarn run test`: runs the tests and prints the output
