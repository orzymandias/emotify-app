import React from "react";
import "./ResultsPanel.css";

const ResultsPanel = () => {
  return (
    <div id="results-panel" title="TEST">
      <p>
        You're feeling:{" "}
        <span id="emotions">{localStorage.getItem("user-input")}</span>
      </p>
      <p id="greeting">Here's some music for you to dive into:</p>
      <br />
      <div className="results">
        <div className="result-container">
          <iframe
            src="https://open.spotify.com/embed/track/60nZcImufyMA1MKQY3dcCH"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="result-container">
          <iframe
            src="https://open.spotify.com/embed/track/6JV2JOEocMgcZxYSZelKcc"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="result-container">
          <iframe
            src="https://open.spotify.com/embed/track/0ZVPABdzJEa0nG85uAlBjB"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="result-container">
          <iframe
            src="https://open.spotify.com/embed/track/5haXbSJqjjM0TCJ5XkfEaC"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="result-container">
          <iframe
            src="https://open.spotify.com/embed/track/4m6AKNNWgzTwnHUZxLMjRj"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>

        <div className="result-container">
          <iframe
            src="https://open.spotify.com/embed/track/05wIrZSwuaVWhcv5FfqeH0"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResultsPanel;
