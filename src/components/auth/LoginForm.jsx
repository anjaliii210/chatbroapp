import { useState } from "react";

const STATIC_PASSWORD = "chatbro123";

function LoginForm({ onSuccess = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password && password === STATIC_PASSWORD) {
      onSuccess();
    } else {
      alert("Invalid password");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Welcome back</h2>
      <p>Login to continue to ChatBRO</p>

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
        Login
      </button>
    </form>
  );
}

export default LoginForm;
