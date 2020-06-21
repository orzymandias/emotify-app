import React, { useEffect } from 'react';
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
          {/* <span id="emotions">{localStorage.getItem('user-input')}</span> */}
          <span id="emotions">
            {salience} {emotion}
          </span>
        </p>
      </div>
      <ResultsPanel userInput={props.userInput} />
    </div>
  );
};

export default SearchResults;
