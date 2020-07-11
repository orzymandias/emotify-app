import React from 'react';
import './SearchBar.css';
import ReactLoading from 'react-loading';

const SearchBar = (props) => {
  return (
    <>
      <div id="searchbar-container">
        {props.modelStatus ? (
          <textarea
            id="searchbar"
            type="text"
            placeholder={props.placeholderText}
            onClick={props.onClick}
            onBlur={props.onBlur}
            onKeyPress={props.onKeyPress}
          />
        ) : (
          <>
            <ReactLoading type="bars" color="#2DB954" className="spinner" />
          </>
        )}
      </div>
    </>
  );
};

export default SearchBar;
