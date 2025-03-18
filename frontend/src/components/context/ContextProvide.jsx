// import React, { createContext, useContext, useState } from "react";
// const authContext = createContext();
// function ContextProvide({ children }) {
//   const [user, setUser] = useState(null);
//   const login = (user) => {
//     setUser(user);
//   };
//   return (
//     <authContext.Provider value={{ user, login }}>
//       {children}
//     </authContext.Provider>
//   );
// }

// export const useAuth = () => useContext(authContext);
// export default ContextProvide;

import React, { createContext, useContext, useState, useEffect } from "react";

const authContext = createContext();

function ContextProvide({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // ✅ Load user from localStorage (Fix logout issue)
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user)); // ✅ Save user on login
  };

  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
export default ContextProvide;
