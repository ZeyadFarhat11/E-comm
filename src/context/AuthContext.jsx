import React, { useContext, useEffect, useState } from "react";
import * as auth from "../util/auth";

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  useEffect(() => {
    setUser(auth.getUser() || {});
  }, []);

  useEffect(() => {
    setToken(auth.getToken());
  }, [user]);

  const saveUser = (data) => {
    setUser(data.user);
    setToken(data.token);
    auth.setUserData(data.token, data.user);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
