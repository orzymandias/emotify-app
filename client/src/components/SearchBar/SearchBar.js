import React, { useContext } from "react";
import "./SearchBar.css";
import ReactLoading from "react-loading";
import { userContext } from "../../context/UserProvider";

const SearchBar = (props) => {
  const { userState, dispatch } = useContext(userContext);

  return (
    <>
      <div id="searchbar-container">
        {props.modelStatus ? (
          <>
            <textarea
              id="searchbar"
              type="text"
              placeholder={props.placeholderText}
              onClick={props.onClick}
              onBlur={props.onBlur}
              onKeyPress={props.onKeyPress}
            />
            {userState.userObject ? (
              <span id="user-checkbox-container">
                Run search on my Spotify library
                <input
                  type="checkbox"
                  className="user-checkbox"
                  onClick={props.onCheckboxCheck}
                  onKeyPress={props.onKeyPress}
                />
              </span>
            ) : (
              <span id="dummy-user-checkbox-container">
                Run search on my Spotify library
                <input type="checkbox" className="user-checkbox" />
              </span>
            )}
          </>
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
