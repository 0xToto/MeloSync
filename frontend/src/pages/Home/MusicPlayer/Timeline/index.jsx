import React, { useEffect, useRef, useState } from "react";
import styles from "../index.module.scss";
import { useMusicContext } from "../../../../services/MusicContext";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

function Timeline() {
  const { currentMusicObject } = useMusicContext();
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (
      currentMusicObject &&
      typeof currentMusicObject.addEventListener === "function"
    ) {
      const handleTimeUpdate = () => {
        setCurrentTime(currentMusicObject.currentTime);
        const progress =
          (currentMusicObject.currentTime / currentMusicObject.duration) * 100;
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${progress}%`;
        }
      };

      currentMusicObject.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        currentMusicObject.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentMusicObject]);

  const formattedTime = formatTime(currentTime);
  const remainingTime = formatTime(
    currentMusicObject ? currentMusicObject.duration - currentTime : 0
  );

  return (
    <div className={styles.timelineAll}>
      <div className={styles.timeline}>
        <div ref={progressBarRef} className={styles.progressFilled} />
      </div>
      <div className={styles.timeWrapper}>
        <span className={styles.time}>{formattedTime}</span>
        <span className={styles.time2}>{`-${remainingTime}`}</span>
      </div>
    </div>
  );
}

export default Timeline;
