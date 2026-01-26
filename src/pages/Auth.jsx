// src/pages/Auth.jsx

import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import AuthHero from "../components/auth/AuthHero";
import LoginForm from "../components/auth/LoginForm";
// import SignupForm from "../components/auth/SignupForm";
import "../components/auth/auth.css";

function Auth() {
  const navigate = useNavigate();

  // TEMP: simulate successful login
  const handleAuthSuccess = () => {
    // fake auth token (replace with real token later)
    localStorage.setItem("token", "demo-auth-token");

    // redirect to dashboard
    navigate("/dashboard");
  };
  

  return (
    <AuthLayout>
      <AuthHero />

      <div className="auth-form-wrapper">
      <LoginForm onSuccess={handleAuthSuccess} />
        {/* Swap with <SignupForm onSuccess={handleAuthSuccess} /> when needed */}
      </div>
    </AuthLayout>
  );
}

export default Auth;
