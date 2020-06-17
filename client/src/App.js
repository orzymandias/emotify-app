import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import SearchResults from "./pages/SearchResults/SearchResults";

class App extends Component {
  userInputEnteredHandler = (event) => {
    if (event.key === "Enter") {
      localStorage.setItem("user-input", event.target.value);
      window.location.href = "search-results";
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => <Home onEnter={this.userInputEnteredHandler} />}
          />
          <Route exact path="/search-results" component={SearchResults} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
