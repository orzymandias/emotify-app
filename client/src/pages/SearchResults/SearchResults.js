import React from "react";
import { EMOTION_CLASSES } from "../../utils/Constants";
import ResultsPanel from "../../components/ResultsPanel/ResultsPanel";
import Popup from "../../components/ResultsPanel/Popup";
// import { TRACKS_SAMPLE } from '../../utils/Mocks';
import "./SearchResults.css";

const SearchResults = (props) => {
  const { emotion, prediction, salience, ...rest } = props.prediction;
  const { recommendation } = props.recommendation;

  document.body.style.backgroundImage = "none";

  console.log(props.recommendation);

  return (
    <div className="search-results">
      <Popup />
      <div id="home-button-container">
        <a href="/" id="home-button" title="Let's do another search!">
          Emotify
        </a>
      </div>
      {/* <ResultsPanel tracks={TRACKS_SAMPLE} /> */}
      {props.recommendation || props.userTracks ? (
        <ResultsPanel
          tracks={
            props.reccomendation
              ? props.recommendation.tracks
              : props.userTracks
          }
          emotion={EMOTION_CLASSES[emotion]}
        />
      ) : null}
    </div>
  );
};

export default SearchResults;
