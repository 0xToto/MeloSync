/* eslint-disable import/no-extraneous-dependencies */
// AppRouter.jsx
import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Account from "../pages/Account/Account";
import Login from "../pages/LoginRegister/Login";
import Verification from "../pages/Verification/Verification";
import VerifiedRoutes from "./VerifiedRoutes";
import { UserContext } from "./UserContext";

function AppRouter() {
  const [userConnected, setUserConnected] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <Routes>
      <Route
        path="/"
        element={<Login userConnected={user} setUserConnected={user} />}
      />
      <Route
        path="/verify"
        element={
          <VerifiedRoutes
            element={Verification}
            userConnected={user}
            setUserConnected={user}
          />
        }
      />
      <Route
        path="/home"
        element={<VerifiedRoutes element={Home} userConnected={user} />}
      />
      <Route
        path="/account"
        element={<VerifiedRoutes element={Account} userConnected={user} />}
      />
    </Routes>
  );
}

export default AppRouter;
