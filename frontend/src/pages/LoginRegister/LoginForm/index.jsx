/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { UserContext } from "../../../services/UserContext";

function LoginForm({ onToggleForm }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    navigate("/verify");
  };

  const addNewConnection = async () => {
    const response = await fetch(`http://localhost:443/user/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const debug = await fetch(
      `http://localhost:443/users/lastlog/${data[0].id}`,
      {
        method: "POST",
      }
    );

    return debug;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:443/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }), // Utilisez les valeurs des états username et password
    })
      // .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setUser(username);

          addNewConnection();
          navigate("/verify");
        } else {
          setError("Identifiant ou mot de passe incorrect");
        }
      })
      .catch((errors) => {
        setError("Une erreur est survenue lors de la connexion", errors);
      });
  };

  return (
    <div className={styles.loginForm}>
      <div className={styles.formContainer}>
        <p className={styles.title}>Connexion ✨</p>
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
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.forgot}>
              <a rel="noopener noreferrer" href="#">
                Mot de passe oublié ?
              </a>
            </div>
          </div>
          <button className={styles.sign} type="submit">
            Connexion
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        <div className={styles.socialMessage}>
          <div className={styles.line} />
          <p className={styles.message}>Pas encore de compte ?</p>
          <div className={styles.line} />
        </div>
        <div className={styles.socialIcons}>
          {/* <button
            className={styles.signAsInvite}
            type="button"
            onClick={handleLogin}
          >
            Connexion en tant qu'invité
          </button> */}
        </div>
        <p className={styles.signup}>
          Ou alors inscrivez-vous juste ici
          <br />
          <a
            rel="noopener noreferrer"
            href="#"
            className={styles.signup}
            onClick={onToggleForm}
          >
            Inscription
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
