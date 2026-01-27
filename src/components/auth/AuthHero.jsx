function AuthHero() {
  return (
    <div className="auth-hero">
      {/* Decorative shapes */}
      <span className="auth-shape shape-1" />
      <span className="auth-shape shape-2" />
      <span className="auth-shape shape-3" />

      <div className="auth-hero-content">
        <h1>Welcome to ChatBRO</h1>

        <p className="auth-hero-subtitle">
          Secure AI-powered document conversations.
        </p>

        <div className="auth-hero-footer">
          No credit card required · Privacy-first AI
        </div>
      </div>
    </div>
  );
}

export default AuthHero;
