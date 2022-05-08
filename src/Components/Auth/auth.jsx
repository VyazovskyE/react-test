import { useState } from "react";
import AuthContext from "../../context/authContext";

export default function AuthProvider({ children }) {
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(savedUser);

  const saveUser = (user) => {
    localStorage.setItem("user", user);
  }

  const login = (user) => {
    setUser(user);
    saveUser(user);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    user,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
