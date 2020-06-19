import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <div id="searchbar-container">
        <input
          id="searchbar"
          type="text"
          placeholder={props.placeholderText}
          onClick={props.onClick}
          onBlur={props.onBlur}
          onKeyPress={props.onKeyPress}
        />
      </div>
    </div>
  );
};

export default SearchBar;
