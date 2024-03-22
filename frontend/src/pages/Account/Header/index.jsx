import React, { useState, useEffect, useContext } from "react";
import styles from "./index.module.scss";

import { UserContext } from "../../../services/UserContext";
// import { useMusicContext } from "../../services/MusicContext";

function HeaderAccount() {
  const { user } = useContext(UserContext);
  const [userId, setUserId] = useState(null);

  return (
    <div>
      <div className={styles.headerAccount}>
        <div className={styles.headerAccountInfo}>
          <div className={styles.headerAccountInfoLeft}>
            <div className={styles.headerAccountInfoLeftAvatar}>
              <img
                src="https://cdn.discordapp.com/attachments/1134304468532461630/1134509164060741642/melosync.png"
                alt="avatar"
              />
            </div>
            <div className={styles.headerAccountInfoLeftName}>
              <h1>{user}</h1>
              {/* <h2>{user}</h2> */}
            </div>
          </div>
          <div className={styles.headerAccountInfoRight}>
            <div className={styles.headerAccountInfoRightStats}>
              <div className={styles.headerAccountInfoRightStatsItem}>
                <h1>0</h1>
                <h2>Followers</h2>
              </div>
              <div className={styles.headerAccountInfoRightStatsItem}>
                <h1>0</h1>
                <h2>Following</h2>
              </div>
              <div className={styles.headerAccountInfoRightStatsItem}>
                <h1>0</h1>
                <h2>Playlists</h2>
              </div>
            </div>
            <div className={styles.headerAccountInfoRightButtons}>
              <button
                className={styles.headerAccountInfoRightButtonsFollow}
                type="button"
              >
                Follow
              </button>
              <button
                className={styles.headerAccountInfoRightButtonsMessage}
                type="button"
              >
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderAccount;
