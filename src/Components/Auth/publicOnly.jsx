import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

export default function PublicOnly ({ children }) {

  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return <Navigate to="/dashboard" state={{ from: location }} replace />;
  }

  return children;
}
