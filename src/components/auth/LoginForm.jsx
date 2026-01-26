import { useState } from "react";

function LoginForm({ onSuccess = () => {} } ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: fake auth check
    if (email && password) {
      onSuccess(); // let parent decide navigation
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
