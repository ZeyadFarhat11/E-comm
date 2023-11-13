import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import * as auth from "../util/auth";

const GuestRoute = ({ children }) => {
  const location = useLocation();

  const authToken = auth.getToken();

  return !authToken ? (
    <>{children}</>
  ) : (
    <>
      <Navigate to="/" replace state={{ from: location }} />
    </>
  );
};

export default GuestRoute;
