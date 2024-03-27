import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import home from "../../../assets/home.png";
import search from "../../../assets/search.png";

function Menu() {

  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/home");
  };


  return (
    <div className={styles.menu}>
      <button className={styles.button} type="button" onClick={handleHomeClick}>
        <img src={home} alt="Accueil" className={styles.icon} />
        <span className={styles.text}>Accueil</span>
      </button>
      <button className={styles.button} type="button">
        <img src={search} alt="Recherche" className={styles.icon} />
        <span className={styles.text}>Recherche</span>
      </button>
      <button className={styles.button} type="button">
        <img src={search} alt="Recherche" className={styles.icon} />
        <span className={styles.text}>Fil d'actualité</span>
      </button>
    </div>
  );
}

export default Menu;
