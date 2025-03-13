import React, { createContext, useContext, useState } from "react";

const authContext = createContext();

function ContextProvide({ children }) {
  const [user, setUser] = useState(null);
  const login = (user) => {
    setUser(user);
  };
  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
export default ContextProvide;
