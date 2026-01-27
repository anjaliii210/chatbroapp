import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Auth from "../pages/Auth";
import Chatbot from "../pages/Chatbot";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />

      {/* Protected routes */}
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chatbot />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;