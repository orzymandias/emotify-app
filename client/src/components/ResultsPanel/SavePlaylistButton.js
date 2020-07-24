import "./SavePlaylistButton.css";
import { saveToPlaylist } from "../../services/playlist";
import React, { useContext } from "react";

export const PlaylistSaveButton = (props) => {
  const { userState, trackId, token, ...rest } = props;
  const handleSave = (e) => {
    const playlistID = e.target.id;
    (async () => {
      try {
        const res = await saveToPlaylist(token, playlistID, trackId);
        if (res.status == 201) {
          document.getElementById("popup").style.visibility = "visible";
          setTimeout(function () {
            document.getElementById("popup").style.visibility = "hidden";
          }, 5000);
        }
      } catch (ex) {
        console.log(ex);
        alert(`Failed to save to playlist.\n${ex}`);
      }
    })();
  };
  return (
    <div class="dropdown">
      <button class="dropbtn">Save to playlist</button>
      <div class="dropdown-content">
        {userState.userPlaylists.map((playlistObj) => {
          return (
            <button id={playlistObj.id} onClick={handleSave}>
              {playlistObj.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
