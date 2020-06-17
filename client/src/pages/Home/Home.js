import React, { Component } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";

class Home extends Component {
  state = {
    searchBarPlaceholderText: "How are you feeling today?",
  };

  searchBarOnClickHandler = () => {
    this.setState({ searchBarPlaceholderText: "" });
  };

  searchBarOnBlurHandler = () => {
    this.setState({ searchBarPlaceholderText: "How are you feeling today?" });
  };

  render() {
    return (
      <div className="home">
        <h1 id="title">Emotify</h1>

        <SearchBar
          placeholderText={this.state.searchBarPlaceholderText}
          onClick={this.searchBarOnClickHandler}
          onBlur={this.searchBarOnBlurHandler}
          onKeyPress={this.props.onEnter}
        />
      </div>
    );
  }
}

export default Home;
