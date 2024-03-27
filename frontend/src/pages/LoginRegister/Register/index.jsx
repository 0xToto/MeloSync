/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

function RegisterForm({ onToggleForm }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    navigate("/home");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const tokenFinal = Math.random().toString(36).substr(2);
    setToken(tokenFinal);


    fetch("http://localhost:443/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email, token }),
    })
      // .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          navigate("/home");
        } else {
          setError("Cette adresse mail est déjà utilisée");
        }
      })
      .catch((error) => {
        setError("Une erreur est survenue lors de la connexion", error);
      });
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.formContainer}>
        <p className={styles.title}>Inscription ✨</p>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Identifiant</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Adresse mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.sign} type="submit">
            S'inscrire
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.socialMessage}>
          <div className={styles.line} />
          <p className={styles.message}>Vous avez déjà un compte ?</p>
          <div className={styles.line} />
        </div>
        <div className={styles.socialIcons}>
        </div>
        <p className={styles.signup}>
          Ou alors connectez-vous !
          <br />
          <a
            rel="noopener noreferrer"
            href="#"
            className={styles.signup}
            onClick={onToggleForm}
          >
            Connexion
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
