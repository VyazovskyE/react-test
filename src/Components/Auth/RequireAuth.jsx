import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

export default function RequireAuth ({ children }) {

  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}