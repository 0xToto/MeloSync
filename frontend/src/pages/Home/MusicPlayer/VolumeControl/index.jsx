import React from "react";
import PropTypes from "prop-types";
import styles from "../index.module.scss";
import { useMusicContext } from "../../../../services/MusicContext";

function VolumeControl() {
  const { volume, updateVolume, currentMusicObject } = useMusicContext();

  const handleVolumeChange = (event) => {
    const { value } = event.target;
    updateVolume(parseFloat(value));
    currentMusicObject.volume = parseFloat(value);
  };

  return (
    <div className={styles.volumeControl}>
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={volume}
        className={styles.volumeSlider}
        onChange={handleVolumeChange}
      />
    </div>
  );
}

export default VolumeControl;
