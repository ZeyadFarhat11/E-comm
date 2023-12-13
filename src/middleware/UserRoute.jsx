import React from "react";
import useAuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const UserRoute = ({ children, redirect = "/login" }) => {
  const { user } = useAuthContext();

  if (!user) return <Navigate to={redirect} />;
  return children;
};

export default UserRoute;
