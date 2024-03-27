import React from "react";
import styles from "./index.module.scss";

function ReactionButton({ emoji, count }) {
  return (
    <button className={styles.reactionButton} type="button">
      <span className={styles.reactionIcon}>{emoji}</span>
      <span className={styles.reactionCount}>{count}</span>
    </button>
  );
}

export default ReactionButton;
