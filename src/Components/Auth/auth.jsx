import { useEffect, useState } from "react";
import AuthContext from "../../context/authContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    localStorage.setItem("user", user);
  }

  const login = (user) => {
    setUser(user);
    saveUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    }
  }, []);

  const value = {
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}