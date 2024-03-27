// LeftPanel.jsx
import React from "react";
import styles from "../index.module.scss";
import heartIcon from "../../../../assets/heart.svg";
import { useMusicContext } from "../../../../services/MusicContext";

function LeftPanel() {
  const { currentMusic, currentMusicObject } = useMusicContext();
  return (
    <div className={styles.leftPanel}>
      <img
        src={currentMusic.image}
        alt="Music Album"
        className={styles.musicImage}
      />
      <div className={styles.musicDetails}>
        <h2 className={styles.musicTitle}>{currentMusic.name}</h2>
        <p className={styles.musicSubtitle}>{currentMusic.subtitle}</p>
      </div>
      <img src={heartIcon} alt="Favorite" className={styles.heartIcon} />
    </div>
  );
}

export default LeftPanel;
