import React, { useEffect } from 'react';
import { EMOTION_CLASSES } from '../../utils/Constants';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import './SearchResults.css';

const SearchResults = (props) => {
  const { emotion, prediction, salience, ...rest } = props.prediction;
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

        {props.recommendation.tracks ? (
          <ResultsPanel tracks={props.recommendation.tracks} />
        ) : null}
      </div>
    </div>
  );
};

export default SearchResults;
