import { ArrowRight } from "lucide-react";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div className="cta-content" data-reveal="left">
          <span className="eyebrow">Speak with Us</span>
          <h2>
            Let’s discuss technology solutions, talent support, and your next
            digital initiative.
          </h2>
          <a href="#contact" className="theme-btn">
            Speak with an Expert <ArrowRight size={16} />
          </a>
        </div>
        <div className="cta-media" data-reveal="right">
          <div data-parallax="0.16">
            <img src="/images/home_contact.png" alt="Speak with our experts" />
          </div>
        </div>
      </div>
    </section>
  );
}
