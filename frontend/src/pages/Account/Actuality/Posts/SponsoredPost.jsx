import React from "react";
import styles from "./SponsoredPost.module.scss";
import ReactionButton from "../ReactionButton";

function SponsoredPost({ post }) {
  const { author, profilePicture, content, date, reactions, image } = post;

  return (
    <div className={styles.sponsoredPost}>
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
      <div className={styles.content}>{content}</div>
      <div className={styles.reactions}>
        <ReactionButton emoji="👍" count={reactions.like} />
        <ReactionButton emoji="❤️" count={reactions.love} />
        <ReactionButton emoji="😂" count={reactions.laugh} />
      </div>
    </div>
  );
}

export default SponsoredPost;
