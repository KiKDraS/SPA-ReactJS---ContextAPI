import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const logIn = (user) => {
    setAuth(user);
  };

  const logOut = () => {
    setAuth(null);
  };

  const data = { auth, logIn, logOut };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
