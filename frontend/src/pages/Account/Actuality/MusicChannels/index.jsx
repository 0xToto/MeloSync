import React from "react";
import styles from "./index.module.scss";
import MusicChannel from "../MusicChannel";

function MusicChannels({ channels }) {
  return (
    <div className={styles.musicChannels}>
      <h1>Music Channels</h1>
      {channels.map((channel) => (
        <MusicChannel key={channel.id} channel={channel} />
      ))}
    </div>
  );
}

export default MusicChannels;
