import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row justify-content-center min-vh-85 align-items-center">

          <div className="col-12 col-lg-9 text-center">

            {/* HEADLINE OUTSIDE CARD */}
            <h1 className="hero-title">
              Build an AI Chatbot for
              <span className="highlight"> Document Summarization</span>
            </h1>

            <p className="hero-subtitle">
              Upload documents, ask questions, and get accurate summaries
              and insights using AI — in seconds.
            </p>

            {/* TRANSLUCENT CARD */}
            <div className="hero-glass-card mt-5">

              {/* IMAGE PLACEHOLDER */}
              <div className="glass-image">
                <div className="chat-bubble user">
                  “Summarize this document in 5 bullet points.”
                </div>
                <div className="chat-bubble bot">
                  “Here’s a concise summary highlighting the key points…”
                </div>
              </div>

              {/* CTA SECTION */}
              {step === 1 && (
                <button
                  className="btn btn-primary btn-lg mt-4"
                  onClick={() => setStep(2)}
                >
                  Let’s start →
                </button>
              )}

              {step === 2 && (
                <>
                  <p className="setup-text mt-4">
                    Describe how you want your AI chatbot to work with documents.
                  </p>

                  <textarea
                    className="form-control setup-textarea"
                    rows="4"
                    placeholder="Example: Summarize uploaded PDFs and answer questions based on them."
                  />

                  <button
                    className="btn btn-success btn-lg mt-4"
                    onClick={() => navigate("/auth")}
                  >
                    Continue →
                  </button>
                </>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
