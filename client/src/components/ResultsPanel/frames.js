import React from 'react';

export const Frame = (props) => {
  const { trackId, ..._ } = props;

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
    </>
  );
};
