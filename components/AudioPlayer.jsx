import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ audioUrl }) => {
  const audioPlayer = useRef();

  useEffect(() => {
    audioPlayer.current.volume = 0.3;
  }, [])
  return (
    <audio controls ref={audioPlayer}>
      <track kind="captions" />
      <source src={audioUrl} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;