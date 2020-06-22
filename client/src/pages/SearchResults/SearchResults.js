import React, { useEffect } from 'react';
import { EMOTION_CLASSES } from '../../utils/Constants';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
// import { TRACKS_SAMPLE } from '../../utils/Mocks';
import './SearchResults.css';

const SearchResults = (props) => {
  const { emotion, prediction, salience, ...rest } = props.prediction;
  const { recommendation } = props.recommendation;

  return (
    <div className="search-results">
      <div id="home-button-container">
        <a href="/" id="home-button" title="Let's do another search!">
          Emotify
        </a>
        <p>
          You're feeling:
          <span id="emotions">
            {salience} {EMOTION_CLASSES[emotion]}
          </span>{' '}
        </p>
      </div>
      {/* <ResultsPanel tracks={TRACKS_SAMPLE} /> */}
      {props.recommendation.tracks ? (
        <ResultsPanel tracks={props.recommendation.tracks} />
      ) : null}
    </div>
  );
};

export default SearchResults;
