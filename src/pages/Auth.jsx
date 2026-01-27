import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";

function Auth() {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleAuthSuccess = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      {mode === "login" ? (
        <LoginForm onSuccess={handleAuthSuccess} />
      ) : (
        <SignupForm onSuccess={handleAuthSuccess} />
      )}

      <button
        className="auth-toggle"
        onClick={() =>
          setMode(mode === "login" ? "signup" : "login")
        }
      >
        {mode === "login"
          ? "Create an account"
          : "Already have an account? Login"}
      </button>
    </AuthLayout>
  );
}

export default Auth;
