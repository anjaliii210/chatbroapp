import "./Features.css";

const features = [
  {
    title: "Instant Responses",
    desc: "Provide quick, accurate answers from documents, improving user satisfaction and reducing manual effort.",
    variant: "purple",
    user: "What are your business hours?",
    bot: "We’re open Monday to Friday, 9 AM to 5 PM "
  },
  {
    title: "Form Assistance",
    desc: "Guide users through form completion with conversational AI, reducing errors and drop-offs.",
    variant: "peach",
    user: "Can you help me fill this form?",
    bot: "Sure! Let’s start with your name and email."
  },
  {
    title: "Smart Summarization",
    desc: "Generate concise summaries from PDFs, DOCX, resumes, and reports in seconds.",
    variant: "blue",
    user: "Summarize this document in 5 bullet points.",
    bot: "Here’s a concise summary highlighting the key points…"
  },
  {
    title: "Secure by Design",
    desc: "Your documents remain private with enterprise-grade security and controlled access.",
    variant: "green",
    user: "Is my data secure?",
    bot: "Yes. Your documents are encrypted and access-controlled."
  }
];

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="section-title text-center">
          Powerful Features for Document Intelligence
        </h2>

        <div className="row g-5 mt-5">
          {features.map((f, i) => (
            <div key={i} className="col-lg-6 col-md-6">
              <div className={`feature-card feature-${f.variant}`}>

                {/* FEATURE VISUAL */}
                <div className="feature-visual">
                  <div className="chat user">
                    “{f.user}”
                  </div>
                  <div className="chat bot">
                    “{f.bot}”
                  </div>
                </div>

                {/* FEATURE TEXT */}
                <div className="feature-content">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
