import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { UserContext } from "../../../../services/UserContext";

import settingsIcon from "../../../../assets/user/settings.png";
import accountIcon from "../../../../assets/user/account.png";
import notificationsIcon from "../../../../assets/user/notifs.png";

function User() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.userMenu}>
      <div className={styles.buttonContainer}>
        <Link to="/settings" className={styles.menuButton}>
          <img src={settingsIcon} alt="Settings" />
          <span>Paramètres</span>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <Link to="/account" className={styles.menuButton}>
          <img src={accountIcon} alt="Account" />
          <span>Compte</span>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <Link to="/notifications" className={styles.menuButton}>
          <img src={notificationsIcon} alt="Notifications" />
          <span>Notifs</span>
        </Link>
      </div>
    </div>
  );
}

export default User;
