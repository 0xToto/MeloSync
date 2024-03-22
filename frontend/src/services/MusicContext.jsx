import React, { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const MusicContext = createContext();

export function useMusicContext() {
  return useContext(MusicContext);
}

export function MusicProvider({ children }) {
  const [currentMusic, setCurrentMusic] = useState(null);
  const [currentMusicObject, setCurrentMusicObject] = useState(new Audio());
  const [lastMusic, setLastMusic] = useState(null);
  const [lastMusicObject, setLastMusicObject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [nextMusic, setNextMusic] = useState(null);
  const [volume, setVolume] = useState(0.5);

  const contextValue = useMemo(
    () => ({
      currentMusic,
      currentMusicObject,
      lastMusic,
      lastMusicObject,
      isPlaying,
      currentTime,
      nextMusic,
      volume,
      updateCurrentMusic: setCurrentMusic,
      updateCurrentMusicObject: setCurrentMusicObject,
      updateLastMusic: setLastMusic,
      updateLastMusicObject: setLastMusicObject,
      updateIsPlaying: setIsPlaying,
      updateCurrentTime: setCurrentTime,
      updateNextMusic: setNextMusic,
      updateVolume: setVolume,
    }),
    [
      currentMusic,
      currentMusicObject,
      lastMusic,
      lastMusicObject,
      isPlaying,
      currentTime,
      nextMusic,
      volume,
    ]
  );

  return (
    <MusicContext.Provider value={contextValue}>
      {children}
    </MusicContext.Provider>
  );
}

MusicProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
