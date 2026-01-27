import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
   
  console.log("AUTH:", isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/auth" replace />;
}

export default ProtectedRoute;