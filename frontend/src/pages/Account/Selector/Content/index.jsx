// Content.js

import React, { useState, useContext, useEffect } from "react";
import styles from "./index.module.scss";
import { UserContext } from "../../../../services/UserContext";

function Content() {
  const { user } = useContext(UserContext);
  const [darkMode, setDarkMode] = useState(false);
  const [showSoundSettings, setShowSoundSettings] = useState(false);
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [showConfidSettings, setShowConfidSettings] = useState(false);

  const [userId, setUserId] = useState("14");
  const [userSettings, setUserSettings] = useState([]);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const response = await fetch(`http://localhost:443/user/${user}`);
        const data = await response.json();
        setUserId(data[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    const fetchUserSettings = async (id) => {
      console.info("ID:", id);
      try {
        const response = await fetch(`http://localhost:443/settings/${id}`);
        const data = await response.json();
        setUserSettings(data[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchUserId();
    fetchUserSettings(userId);
  }, []);


  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleShowSoundsSettings = () => {
    setShowSoundSettings(!showSoundSettings);
    console.info("User settings:", userSettings)
  };

  const handleShowAccountSettings = () => {
    setShowAccountSettings(!showAccountSettings);
  };

  const handleShowCondifentialitiesSettings = () => {
    setShowConfidSettings(!showConfidSettings);
  };

  return (
    <div className={styles.contentContainer}>
      <div className={styles.content}>
        <div className={styles.menu}>
          <button
            className={styles.menuButton}
            onClick={handleShowSoundsSettings}
            type="button"
          >
            {showSoundSettings ? "Son" : "Son"}
          </button>
          <button
            className={styles.menuButton}
            onClick={handleShowAccountSettings}
            type="button"
          >
            {showAccountSettings ? "Compte" : "Compte"}
          </button>
          <button
            className={styles.menuButton}
            onClick={handleShowCondifentialitiesSettings}
            type="button"
          >
            {showConfidSettings ? "Confidentialité" : "Confidentialité"}
          </button>
        </div>
        {showSoundSettings && (
          <div className={styles.settings}>
            <div className={styles.title}>
              <h3>Paramètres de son</h3>
            </div>
            <div className={styles.settingItem}>
              <p>Activer le son</p>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={darkMode}
                  onChange={handleDarkModeChange}
                />
                <div className={styles.slider} />
              </label>
            </div>
            {/* Add more setting items here */}
          </div>
        )}
        {showAccountSettings && (
          <div className={styles.settings}>
            <div className={styles.title}>
              <h3>Paramètres de compte</h3>
            </div>
            <div className={styles.settingItem}>
              <p>Désactiver le compte</p>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={darkMode}
                  onChange={handleDarkModeChange}
                />
                <div className={styles.slider} />
              </label>
            </div>
            {/* Add more setting items here */}
          </div>
        )}
        {showConfidSettings && (
          <div className={styles.settings}>
            <div className={styles.title}>
              <h3>Paramètres de confidentialité</h3>
            </div>
            <div className={styles.settingItem}>
              <p>Rendre le profil public</p>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={darkMode}
                  onChange={handleDarkModeChange}
                />
                <div className={styles.slider} />
              </label>
            </div>
            {/* Add more setting items here */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
