import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "./auth.css";

function AuthLayout() {
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-page">
      {/* LEFT SIDE */}
      <div className="auth-hero">
        <h1>ChatBRO</h1>
        <p>
          Your AI-powered conversation partner.  
          Smarter chats. Faster answers. Zero friction.
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-form-wrapper">
        <div>
          <div className="auth-tabs">
            <button
              className={mode === "login" ? "active" : ""}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              className={mode === "signup" ? "active" : ""}
              onClick={() => setMode("signup")}
            >
              Sign Up
            </button>
          </div>

          {mode === "login" ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
