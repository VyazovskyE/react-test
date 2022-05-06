import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

<<<<<<< HEAD
export default function RequireAuth({ children }) {
=======
export default function RequireAuth ({ children }) {
>>>>>>> 59a5a6ac0668e4b81215c280317ddb5c5f281934
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
