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

        <p className="auth-hero-desc">
          Upload documents, ask natural language questions, and get
          instant, accurate answers — all in one place.
        </p>

        <ul className="auth-hero-features">
          <li>Summarize PDFs, DOCX, and reports</li>
          <li>Ask questions and get cited answers</li>
          <li>Private, secure, and fast by design</li>
        </ul>

        <div className="auth-hero-footer">
          No credit card required · Privacy-first AI
        </div>
      </div>
    </div>
  );
}

export default AuthHero;
