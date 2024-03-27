import React from "react";
import styles from "./NewMusicPost.module.scss";
import ReactionButton from "../ReactionButton";

function NewMusicPost({ post }) {
  const { author, profilePicture, title, artist, date, reactions, image } = post;

  return (
    <div className={styles.newMusicPost}>
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
      <div className={styles.musicInfo}>
        <h3 className={styles.musicTitle}>{title}</h3>
        <h4 className={styles.musicArtist}>{artist}</h4>
      </div>
      <div className={styles.reactions}>
        <ReactionButton emoji="👍" count={reactions.like} />
        <ReactionButton emoji="❤️" count={reactions.love} />
        <ReactionButton emoji="😂" count={reactions.laugh} />
      </div>
    </div>
  );
}

export default NewMusicPost;
