import React, { useState } from "react";
import styles from "./index.module.scss";
import Slider from "./Slider"; // Import the Slider component
import LoginForm from "./LoginForm";
import logo from "../../assets/melosync.png";
import RegisterForm from "./Register";

function Login({userConnected, setUserConnected}) {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const toggleForm = () => {
    setShowRegisterForm((prev) => !prev);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.sliderContainer}>
        <Slider />
      </div>
      <div className={styles.loginForm}>
        <div className={styles.loginLogo}>
          <img src={logo} alt="LogoMeloSync" />
        </div>
        {showRegisterForm ? (
          <RegisterForm onToggleForm={toggleForm} />
        ) : (
          <LoginForm
            onToggleForm={toggleForm}
            userConnected={userConnected}
            setUserConnected={setUserConnected}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
