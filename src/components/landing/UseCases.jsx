import { useState } from "react";
import "./useCases.css";

import ecommerce from "../../assets/images/ecommerce.jpg";
import realEstate from "../../assets/images/realstate.jpg";
import conference from "../../assets/images/conference.jpg";
import education from "../../assets/images/education.jpg";



const useCasesData = [
  {
    id: "ecommerce",
    title: "Customer support for e-commerce",
    description: [
      "Answer frequently asked questions about orders, returns, and shipping.",
      "Improve customer satisfaction by providing quick, automated answers 24/7."
    ],
    image: ecommerce
  },
  {
    id: "realestate",
    title: "Lead generation for real estate",
    description: [
      "Capture and qualify leads by asking property-related questions.",
      "Automatically route hot leads to sales teams."
    ],
    image: realEstate
  },
  {
    id: "events",
    title: "Event registration for conferences",
    description: [
      "Handle registrations, schedules, and FAQs instantly.",
      "Reduce manual coordination and user drop-offs."
    ],
    image: conference
  },
  {
    id: "education",
    title: "Feedback collection for education",
    description: [
      "Collect structured feedback from students and staff.",
      "Generate actionable insights using AI summaries."
    ],
    image: education
  }
];


export default function UseCases() {
  const [activeCase, setActiveCase] = useState(useCasesData[0]);

  return (
    <section id="use-cases" className="usecases-section">
      <h2 className="usecases-title">Use cases</h2>

      <div className="usecases-container">
        {/* LEFT LIST */}
        <div className="usecases-list">
          {useCasesData.map((item) => (
            <div
              key={item.id}
              className={`usecase-item ${
                activeCase.id === item.id ? "active" : ""
              }`}
              onClick={() => setActiveCase(item)}
            >
              <h4>{item.title}</h4>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>

        {/* RIGHT PREVIEW */}
        <div className="usecases-preview">
          <div className="preview-card">
            <img src={activeCase.image} alt={activeCase.title} />
            <div className="preview-content">
              <h5>{activeCase.title}</h5>
              {activeCase.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
