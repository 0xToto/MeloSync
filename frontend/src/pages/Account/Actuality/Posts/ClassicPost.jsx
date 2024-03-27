import React from "react";
import styles from "./ClassicPost.module.scss";
import ReactionButton from "../ReactionButton";
import VerifiedIcon from "../../../../assets/account.png"; // Importer l'icône certifiée depuis votre emplacement d'assets

function ClassicPost({ post }) {
  const { author, profilePicture, content, date, reactions, image } = post;

  return (
    <div className={styles.classicPost}>
      <div className={styles.postHeader}>
        <img
          className={styles.profilePicture}
          src={profilePicture}
          alt="Profile"
        />
        <div className={styles.authorInfo}>
          <span className={styles.authorName}>{author}</span>
          <img
            className={styles.verifiedIcon}
            src={VerifiedIcon}
            alt="Verified"
          />
          {/* Afficher l'icône certifiée à côté du pseudo */}
          <span className={styles.postDate}>{date}</span>
        </div>
      </div>
      {image && <img className={styles.postImage} src={image} alt="Post" />}
      <div className={styles.content}>{content}</div>
      <div className={styles.reactions}>
        <ReactionButton emoji="👍" count={reactions.like} />
        <ReactionButton emoji="❤️" count={reactions.love} />
        <ReactionButton emoji="😂" count={reactions.laugh} />
      </div>
    </div>
  );
}

export default ClassicPost;
