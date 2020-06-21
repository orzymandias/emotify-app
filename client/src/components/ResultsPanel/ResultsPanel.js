import React from 'react';
import './ResultsPanel.css';
import { Frame } from './frames';

const ResultsPanel = (props) => {
  const { tracks } = props;
  return (
    <div id="results-panel">
      <p id="greeting">Here's some music for you to dive into:</p>
      <br />

      <div className="results">
        <div className="result-container">
          {tracks.map((trackObj) => {
            return <Frame trackId={trackObj.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;
