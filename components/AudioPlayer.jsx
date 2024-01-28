import React from 'react';

const AudioPlayer = ({ audioUrl }) => {
  return (
    <audio controls>
      <track kind="captions" />
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;