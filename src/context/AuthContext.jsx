import React, { useContext, useEffect, useState } from "react";
import * as auth from "../util/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(auth.getUser());
  const [token, setToken] = useState(auth.getToken());

  const saveUser = (data) => {
    setUser(data.user);
    setToken(data.token);
    auth.setUserData(data.token, data.user);
  };

  const logout = () => {
    localStorage.removeItem(auth.userKey);
    localStorage.removeItem(auth.userTokenKey);
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, saveUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
