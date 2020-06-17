import React, { Component } from "react";
import ResultsPanel from "../../components/ResultsPanel/ResultsPanel";
import "./SearchResults.css";

class SearchResults extends Component {
  render() {
    document.body.style.backgroundImage = "none";
    return (
      <div className="search-results">
        <div id="home-button-container">
          <a href="/" id="home-button" title="Let's do another search!">
            Emotify
          </a>
        </div>
        <ResultsPanel userInput={this.props.userInput} />
      </div>
    );
  }
}

export default SearchResults;
