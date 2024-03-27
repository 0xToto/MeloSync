import React from "react";
import styles from "../index.module.scss";
import playIcon from "../../../../assets/play.svg";
import pauseIcon from "../../../../assets/pause.svg";
import back from "../../../../assets/prev.svg";
import next from "../../../../assets/next.svg";

import { useMusicContext } from "../../../../services/MusicContext";

function PlayerControls() {
  const { updateIsPlaying, isPlaying, currentMusicObject } = useMusicContext();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.info("Touche Entrée appuyée");
    }
  };

  const onPlayPauseClick = () => {
    if (isPlaying) {
      currentMusicObject.pause();
    } else {
      currentMusicObject.play();
    }
    updateIsPlaying(!isPlaying);
  };

  return (
    <div
      className={styles.playerControls}
      tabIndex={0}
      role="button"
      onKeyDown={handleKeyPress}
    >
      <button className={styles.controlButton} type="button">
        <img src={back} alt="back" />
      </button>

      <button
        className={styles.controlButton}
        type="button"
        onClick={onPlayPauseClick}
      >
        <img
          src={isPlaying ? pauseIcon : playIcon}
          alt={isPlaying ? "Pause" : "Play"}
        />
      </button>

      <button className={styles.controlButton} type="button">
        <img src={next} alt="next" />
      </button>
    </div>
  );
}

export default PlayerControls;
