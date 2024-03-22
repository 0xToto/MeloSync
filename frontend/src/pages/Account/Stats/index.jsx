import React, { useEffect, useState, useContext } from "react";
import styles from "./index.module.scss";
import { useMusicContext } from "../../../services/MusicContext";
import { UserContext } from "../../../services/UserContext";
import Button from "../Button";

import enveloppe from "../../../assets/icons/envelope-solid.svg";
import bio from "../../../assets/icons/socks-solid.svg";
import admin from "../../../assets/icons/crown-solid.svg";
import verified from "../../../assets/icons/certificate-solid.svg";
import registerDate from "../../../assets/icons/calendar-check-solid.svg";
import lastConnection from "../../../assets/icons/clock-solid.svg";
import songsAdded from "../../../assets/icons/arrow-trend-up-solid.svg";

import slide1 from "../../../assets/login/1.png";
import slide2 from "../../../assets/login/2.png";

function Stats() {
  const [userData, setUserData] = useState(null);
  const { user } = useContext(UserContext);

  function formatTimestamp(timestamp) {
    console.info(timestamp);
    const parisTimezoneOffset = 120; // Décalage horaire de Paris en minutes (120 minutes = 2 heures)
    const date = new Date(timestamp);
    const parisTime = new Date(
      date.getTime() + parisTimezoneOffset * 60 * 1000
    );

    const day = String(parisTime.getDate()).padStart(2, "0");
    const month = String(parisTime.getMonth() + 1).padStart(2, "0");
    const year = parisTime.getFullYear();
    const hours = String(parisTime.getHours()).padStart(2, "0");
    const minutes = String(parisTime.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }

  useEffect(() => {
    // Fonction pour effectuer la requête fetch à l'URL souhaitée
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:443/user/${user}`);
        const data = await response.json();
        console.info("Données récupérées:", data);
        setUserData(data[0]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchUserData();
  }, []);

  if (!userData) {
    return <div>Chargement en cours...</div>;
  }

  const test = formatTimestamp(userData.registerDate);
  console.info(test);

  return (
    <div className={styles.userProfile}>
      <Button
        text="Email"
        onClick={formatTimestamp(1000)}
        logo={enveloppe}
        description="jdsicscds"
      />
      <Button
        text="Bonjour"
        onClick={formatTimestamp(1000)}
        logo={bio}
        description="bio"
      />
      <Button
        text="Bonjour"
        onClick={formatTimestamp(1000)}
        logo={admin}
        description="admin?"
      />
      <Button
        text="Bonjour"
        onClick={formatTimestamp(1000)}
        logo={verified}
        description="vérifié?"
      />
      <Button
        text="Bonjour"
        onClick={formatTimestamp(1000)}
        logo={registerDate}
      />
      <Button
        text="Bonjour"
        onClick={formatTimestamp(1000)}
        logo={lastConnection}
      />
    </div>
  );
}

export default Stats;
