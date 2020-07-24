import React from "react";
import "./NoTracksFound.css";

export const ErrorMessage = () => {
  return (
    <div id="error-message-container">
      <h1 id="error-message">
        Oops, we could not find any tracks in your library <br /> for this input
        at the moment! <br /> <br /> Try another search.
      </h1>
    </div>
  );
};
