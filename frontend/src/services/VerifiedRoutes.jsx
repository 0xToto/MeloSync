import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function VerifiedRoutes({ element: Component }) {
  const { user } = useContext(UserContext);

  if (user === null) {
    return <Navigate to="/" />;
  }

  return <Component />;
}
