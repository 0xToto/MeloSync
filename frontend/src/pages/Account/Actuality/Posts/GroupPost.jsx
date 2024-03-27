import React from "react";
import styles from "./GroupPost.module.scss";
import ReactionButton from "../ReactionButton";

function GroupPost({ post }) {
  const { author, profilePicture, text, date, reactions, image } = post;

  return (
    <div className={styles.groupPost}>
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
      <div className={styles.content}>{text}</div>
      <div className={styles.reactions}>
        <ReactionButton emoji="👍" count={reactions.like} />
        <ReactionButton emoji="❤️" count={reactions.love} />
        <ReactionButton emoji="😂" count={reactions.laugh} />
      </div>
    </div>
  );
}

export default GroupPost;
