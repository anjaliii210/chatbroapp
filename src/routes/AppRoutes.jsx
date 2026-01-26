import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Chatbot from "../pages/Chatbot";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/chat" element={<Chatbot />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/auth" />}
/>
      <Route path="/chat" element={<ProtectedRoute><Chatbot /></ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default AppRoutes;