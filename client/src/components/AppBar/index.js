import React, { useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { userContext } from "../../context/UserProvider";
import querySearch from "stringquery";
import "./index.css";

const SPOTIFY_USER_AUTH = `${process.env.REACT_APP_HOST}/auth/spotify`;

export const AppBar = withRouter((props) => {
  const { userState, dispatch } = useContext(userContext);

  useEffect(() => {
    // CASE 1: Callback from spotify authentication, User just logged in
    // Update user variables and accessTOken
    if (props.location.search) {
      let query = querySearch(props.location.search);
      dispatch({ type: "SET_USER", payload: query.user });
      dispatch({ type: "SET_TOKEN", payload: query.token });
      sessionStorage.setItem("userLoggedIn", true);

      window.history.replaceState(null, null, `${window.location.origin}/`);
    }
    // CASE 2: if user already logged in based on current session but accessToken missing
    else if (sessionStorage.getItem("userLoggedIn") && !userState.accessToken) {
      window.location.href = SPOTIFY_USER_AUTH;
    }

    // ELSE: User has not logged in
    else {
    }
  }, []);

  const onClickLogin = (e) => {
    return isLoggedIn()
      ? handleLogout()
      : (window.location = SPOTIFY_USER_AUTH);
  };
  const handleLogout = () => {
    dispatch({ type: "LOG_OUT", payload: "" });
  };

  const isLoggedIn = () => {
    return userState.userObject ? true : false;
  };
  return (
    <>
      <div id="appbar-container">
        <button id="account-button" onClick={onClickLogin}>
          {isLoggedIn() ? "Log out of Spotify" : "Sign in with Spotify"}
        </button>
      </div>
    </>
  );
});
