import React from "react";
import PropTypes from "prop-types";
import styles from "./index.module.scss";

function Button({ logo, text, description, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} type="button">
      <div className={styles.logo}>
        <img src={logo} alt="Bouton qui permet de cliquer" />
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.text}>{description}</div>
    </button>
  );
}

Button.propTypes = {
  logo: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
