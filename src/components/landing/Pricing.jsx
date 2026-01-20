import "./pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <h2 className="section-title">Pricing</h2>
      <p className="section-subtitle">
        Simple pricing for teams of all sizes. Start free, upgrade when you grow.
      </p>

      <div className="pricing-grid">
        <div className="pricing-card">
          <h3>Starter</h3>
          <p className="price">Free</p>
          <ul>
            <li>✔ Upload up to 5 documents</li>
            <li>✔ Basic summarization</li>
            <li>✔ Limited chat history</li>
          </ul>
          <button className="btn-outline">Get Started</button>
        </div>

        <div className="pricing-card highlighted">
          <span className="badge">Most Popular</span>
          <h3>Pro</h3>
          <p className="price">$19 / month</p>
          <ul>
            <li>✔ Unlimited documents</li>
            <li>✔ Advanced AI summaries</li>
            <li>✔ Ask questions on documents</li>
            <li>✔ Chat history & export</li>
          </ul>
          <button className="btn-primary">Start Free Trial</button>
        </div>

        <div className="pricing-card">
          <h3>Enterprise</h3>
          <p className="price">Custom</p>
          <ul>
            <li>✔ Large document support</li>
            <li>✔ Private AI models</li>
            <li>✔ Role-based access</li>
            <li>✔ Dedicated support</li>
          </ul>
          <button className="btn-outline">Contact Sales</button>
        </div>
      </div>
    </section>
  );
}
