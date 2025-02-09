/* eslint-disable react/prop-types */
// src/components/IsPrivate.jsx

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(AuthContext);

  if (isLoading) return <p>Loading ...</p>;

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}

export default IsPrivate;
