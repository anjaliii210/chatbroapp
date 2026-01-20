import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>AI Document Chatbot</h4>
          <p>
            Summarize documents, ask questions, and extract insights using AI —
            faster than ever.
          </p>
        </div>

        <div>
          <h4>Product</h4>
          <ul>
            <li>Features</li>
            <li>Use Cases</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4>Support</h4>
          <ul>
            <li>Contact</li>
            <li>Documentation</li>
            <li>Email Support</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} AI Document Chatbot. All rights reserved.
      </div>
    </footer>
  );
}
