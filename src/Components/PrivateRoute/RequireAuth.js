import { getAuth } from "firebase/auth";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = getAuth();
  let location = useLocation();

  return (
    <>
      {auth.currentUser ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default RequireAuth;
