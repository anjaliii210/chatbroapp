import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake signup success
    if (name && email && password) {
      navigate("/chat");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Create account</h2>
      <p>Get started with ChatBRO</p>

      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit" className="auth-btn">
        Sign Up
      </button>
    </form>
  );
}

export default SignupForm;
