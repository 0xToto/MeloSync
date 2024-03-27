import React, { useState } from "react";
import styles from "./index.module.scss";
import MusicDownloader from "./Downloader";

function AddSongs({ title, subtitle, image, children }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prevIsDropdownVisible) => !prevIsDropdownVisible);
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.mainButton} onClick={toggleDropdown}>
        <img className={styles.icon} src={image} alt={title} />
        <div className={styles.textContainer}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </button>
      {isDropdownVisible && (
        <div className={styles.dropdownContent}>
          <MusicDownloader />
        </div>
      )}
    </div>
  );
}

export default AddSongs;
