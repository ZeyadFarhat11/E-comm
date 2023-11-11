import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export const ShopProvider = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
