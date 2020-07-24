import React, { useEffect, useContext } from "react";
import "./ResultsPanel.css";
import { userContext } from "../../context/UserProvider";
import { Frame } from "./frames";
import { getPlaylists } from "../../services/playlist";

const ResultsPanel = (props) => {
  const { userState, dispatch } = useContext(userContext);
  const { tracks } = props;

  useEffect(() => {
    // if user is logged in, fetch playlists
    (async () => {
      if (userState.userObject) {
        try {
          const playlists = await getPlaylists(userState.accessToken);
          dispatch({ type: "SAVE_PLAYLISTS", payload: playlists.data.items });
        } catch (error) {
          console.log("error fetching playlists", error);
          alert("Playlist cannot be fetched");
        }
      }
    })();
  }, []);

  console.log(tracks);
  console.log(typeof tracks);

  return (
    <div id="results-panel">
      <p>
        You're feeling: <span id="emotion">{props.emotion}</span>
      </p>
      <p id="greeting">Here's some music for you to dive into:</p>
      <br />

      <div className="results">
        {/* {tracks.map((trackObj) => {
          return (
            <div className="result-container">
              <Frame trackId={trackObj.id} />;
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default ResultsPanel;
