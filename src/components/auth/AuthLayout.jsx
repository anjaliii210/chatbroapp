import "./auth.css";

function AuthLayout({ children }) {
  return (
    <div className="auth-page">
      <div className="auth-hero" />
      <div className="auth-form-wrapper">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
