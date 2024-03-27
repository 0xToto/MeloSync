import React from "react";
import styles from "./GroupEndPost.module.scss";
import ReactionButton from "../ReactionButton";

function GroupEndPost({ post }) {
  const { author, profilePicture, duration, songsListened, date, reactions, image } = post;

  return (
    <div className={styles.groupEndPost}>
      <div className={styles.postHeader}>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          alt="Profile"
        />
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{author}</span>
          <span className={styles.postDate}>{date}</span>
        </div>
      </div>
      <img className={styles.postImage} src={image} alt="Post" />
      <div className={styles.groupDetails}>
        <p className={styles.groupDuration}>Group Duration: {duration}</p>
        <p className={styles.songsListened}>Songs Listened: {songsListened}</p>
      </div>
      <div className={styles.reactions}>
        <ReactionButton emoji="👍" count={reactions.like} />
        <ReactionButton emoji="❤️" count={reactions.love} />
        <ReactionButton emoji="😂" count={reactions.laugh} />
      </div>
    </div>
  );
}

export default GroupEndPost;
