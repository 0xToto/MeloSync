import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import LeftPanel from "./LeftPanel";
import Timeline from "./Timeline";
import VolumeControl from "./VolumeControl";
import PlayerControls from "./PlayerControls";
import { useMusicContext } from "../../../services/MusicContext";

function MusicPlayer() {
  const {
    currentMusicObject,
    currentMusic,
    isPlaying,
    updateCurrentTime,
    updateIsPlaying,
  } = useMusicContext();
  const [currentTime, setCurrentTime] = useState(0);
  const [isAudioLoaded, setIsAudioLoaded] = useState(false);

  useEffect(() => {
    if (
      !isAudioLoaded &&
      currentMusic.music &&
      currentMusicObject.src !== currentMusic.music
    ) {
      currentMusicObject.src = currentMusic.music;
      currentMusicObject.load();
      setIsAudioLoaded(true);
    }

    if (isAudioLoaded) {
      currentMusicObject.currentTime = currentTime;

      if (isPlaying) {
        currentMusicObject.play();
      } else {
        currentMusicObject.pause();
      }
    }
  }, [isPlaying, currentTime, currentMusic, currentMusicObject, isAudioLoaded]);

  // useEffect(() => {
  //   // This effect is responsible for updating the currentTime
  //   // of the music in the context.
  //   const handleTimeUpdate = () => {
  //     setCurrentTime(currentMusicObject.currentTime);
  //   };

  //   currentMusicObject.addEventListener("timeupdate", handleTimeUpdate);

  //   return () => {
  //     currentMusicObject.removeEventListener("timeupdate", handleTimeUpdate);
  //   };
  // }, [currentMusicObject]);

  const handlePlayPause = () => {
    updateIsPlaying(!isPlaying);
  };

  const handleSeek = (time) => {
    if (currentMusicObject.seekable.length > 0) {
      currentMusicObject.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <div className={styles.musicPlayer}>
      <LeftPanel />
      <div className={styles.controlsAndTimeline}>
        <PlayerControls onPlayPause={handlePlayPause} isPlaying={isPlaying} />
        <Timeline
          audio={currentMusicObject}
          currentTime={currentTime}
          onSeek={handleSeek}
        />
      </div>
      <VolumeControl />
    </div>
  );
}

export default MusicPlayer;
