import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

export default function RequireAuth ({ children }) {

  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
