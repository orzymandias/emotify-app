import React from "react";
import "./ResultsPanel.css";
import { Frame } from "./frames";

const ResultsPanel = (props) => {
  const { tracks } = props;
  return (
    <div id="results-panel">
      <p>
        You're feeling: <span id="emotion">{props.emotion}</span>
      </p>
      <p id="greeting">Here's some music for you to dive into:</p>
      <br />

      <div className="results">
        {tracks.map((trackObj) => {
          return (
            <div className="result-container">
              <Frame trackId={trackObj.id} />;
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultsPanel;
