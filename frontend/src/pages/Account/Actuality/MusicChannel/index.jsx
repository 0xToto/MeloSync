import React from "react";
import styles from "./index.module.scss";

function MusicChannel({ channel }) {
  const { name, description, users, currentTrack } = channel;

  return (
    <div className={styles.musicChannel}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Users: {users}</p>
      {currentTrack && (
        <div className={styles.currentTrack}>
          <p>Now Playing:</p>
          <p>{currentTrack.title}</p>
          <p>by {currentTrack.artist}</p>
          <button type="button">
            <i className="fas fa-play" />
            Rejoindre le salon d'écoute
          </button>
        </div>
      )}
    </div>
  );
}

export default MusicChannel;
