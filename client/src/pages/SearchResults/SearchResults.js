import React from "react";
import { EMOTION_CLASSES } from "../../utils/Constants";
import ResultsPanel from "../../components/ResultsPanel/ResultsPanel";
import Popup from "../../components/ResultsPanel/Popup";
// import { TRACKS_SAMPLE } from '../../utils/Mocks';
import "./SearchResults.css";
import { ErrorMessage } from "../../components/ResultsPanel/NoTracksFound";

const SearchResults = (props) => {
  const { emotion, prediction, salience, ...rest } = props.prediction;
  const { recommendation } = props.recommendation;

  document.body.style.backgroundImage = "none";

  // If no search results can be found, after 3 seconds an error message will appear
  setTimeout(function () {
    if (document.getElementById("error-message")) {
      document.getElementById("error-message").style.visibility = "visible";
    }
  }, 3000);

  //TODO: change null to ErrorMessage but have its appearance delayed
  return (
    <div className="search-results">
      <Popup />
      <div id="home-button-container">
        <a href="/" id="home-button" title="Let's do another search!">
          Emotify
        </a>
      </div>
      {props.recommendation.tracks || props.userTracks[0] ? (
        <ResultsPanel
          tracks={
            props.recommendation.tracks
              ? props.recommendation.tracks
              : props.userTracks
          }
          emotion={EMOTION_CLASSES[emotion]}
        />
      ) : (
        <ErrorMessage />
      )}
    </div>
  );
};

export default SearchResults;
