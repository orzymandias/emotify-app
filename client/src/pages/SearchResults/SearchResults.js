import React from 'react';
import { EMOTION_CLASSES } from '../../utils/Constants';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
// import { TRACKS_SAMPLE } from '../../utils/Mocks';
import './SearchResults.css';

const SearchResults = (props) => {
  const { emotion, prediction, salience, ...rest } = props.prediction;
  const { recommendation } = props.recommendation;

  console.log(salience);

  document.body.style.backgroundImage = 'none';

  return (
    <div className="search-results">
      <div id="home-button-container">
        <a href="/" id="home-button" title="Let's do another search!">
          Emotify
        </a>
      </div>
      {/* <ResultsPanel tracks={TRACKS_SAMPLE} /> */}
      {props.recommendation.tracks ? (
        <ResultsPanel
          tracks={props.recommendation.tracks}
          emotion={EMOTION_CLASSES[emotion]}
        />
      ) : null}
    </div>
  );
};

export default SearchResults;
