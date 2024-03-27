import React from "react";
import styles from "./index.module.scss";
import ReactionButton from "../ReactionButton";

function Post({ post }) {
  const { author, profilePicture, content, date, reactions } = post;

  return (
    <div className={styles.post}>
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
      <div className={styles.content}>{content}</div>
      <div className={styles.reactions}>
        <ReactionButton emoji="👍" count={reactions.like} />
        <ReactionButton emoji="❤️" count={reactions.love} />
        <ReactionButton emoji="😂" count={reactions.laugh} />
        {/* Add more reaction buttons as needed */}
      </div>
    </div>
  );
}

export default Post;
