import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import logo from "../../assets/melosync.png";

function Verification() {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(600);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(countdown);
      };
    }
  }, [timer]);

  const handleVerificationSubmit = (event) => {
    event.preventDefault();
    // Simuler la vérification du code (Remplacer la condition ci-dessous par une vérification réelle)
    const validCode = "123456"; // Code de vérification valide (exemple)

    const finalCode = verificationCode.toString().replace(/,/g, "");

    if (finalCode === validCode) {
      // Code de vérification correct, rediriger vers la page d'accueil
      navigate("/home");
    } else {
      setError("Code de vérification incorrect, veuillez réessayer.");
    }
  };

  return (
    <div className={styles.verification}>
      <form className={styles.form}>
        {/* <span className={styles.close}>X</span> */}

        <div className={styles.loginLogo}>
          <img src={logo} alt="LogoMeloSync" />
        </div>

        <div className={styles.info}>
          <span className={styles.title}>Vérification à double facteurs </span>
          <p className={styles.description}>
            Nous vous avons envoyé un mail contenant un code de vérification que
            vous devez entrer ci-dessous !{" "}
          </p>

          <p>Le code est valide durant : {timer} secondes</p>
        </div>
        <div className={styles.inputFields}>
          {/* Use an array to generate input fields */}
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              maxLength="1"
              type="tel"
              placeholder=""
              value={verificationCode[index] || ""}
              onChange={(e) => {
                const code = e.target.value;
                setVerificationCode((prevCode) => {
                  const newCode = [...prevCode];
                  newCode[index] = code;
                  return newCode;
                });
              }}
            />
          ))}
        </div>

        <div className={styles.actionBtns} onClick={handleVerificationSubmit}>
          <a className={styles.verify}>Vérifier votre connexion</a>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

export default Verification;
