import "./faqs.css";

const FAQS = [
  {
    q: "What does this AI chatbot do?",
    a: "It allows users to upload documents and instantly get summaries, insights, and answers by chatting with the document."
  },
  {
    q: "What file formats are supported?",
    a: "PDF, DOCX, TXT, and other common document formats are supported."
  },
  {
    q: "Is my data secure?",
    a: "Yes. Uploaded documents are processed securely and are never shared or used to train public models."
  },
  {
    q: "Can I ask follow-up questions?",
    a: "Yes. You can ask unlimited questions based on the uploaded document context."
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. The platform is designed for non-technical users with a simple, chat-based interface."
  }
];

export default function FAQs() {
  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>

      <div className="faq-list">
        {FAQS.map((item, index) => (
          <details key={index} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
