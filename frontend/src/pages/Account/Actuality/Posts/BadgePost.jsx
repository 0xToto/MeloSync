import React from "react";
import styles from "./BadgePost.module.scss";
import ReactionButton from "../ReactionButton";

function BadgePost({ post }) {
  const { author, profilePicture, badge, date, reactions, image } = post;

  return (
    <div className={styles.badgePost}>
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
      <div className={styles.badgeInfo}>
        <img className={styles.badgeImage} src={badge} alt="Badge" />
        <div className={styles.badgeDetails}>
          <h3 className={styles.badgeName}>{badge.name}</h3>
          <p className={styles.badgeExperience}>
            Experience: {badge.experience}
          </p>
        </div>
      </div>
      <div className={styles.reactions}>
        <ReactionButton emoji="👍" count={reactions.like} />
        <ReactionButton emoji="❤️" count={reactions.love} />
        <ReactionButton emoji="😂" count={reactions.laugh} />
      </div>
    </div>
  );
}

export default BadgePost;
