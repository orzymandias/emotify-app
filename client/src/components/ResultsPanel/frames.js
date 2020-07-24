import { PlaylistSaveButton } from './SavePlaylistButton';
import React, { useContext } from 'react';
import { userContext } from '../../context/UserProvider';
import './frames.css';

export const Frame = (props) => {
  const { trackId, ..._ } = props;
  const { userState, dispatch } = useContext(userContext);

  return (
    <>
      <iframe
        id={trackId}
        src={`https://open.spotify.com/embed/track/${trackId}`}
        width="300"
        height="380"
        title="one"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      {userState.userPlaylists ? (
        <div class="frames-button-container">
          <PlaylistSaveButton
            userState={userState}
            trackId={trackId}
            token={userState.accessToken}
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};
