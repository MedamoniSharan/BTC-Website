import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
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
          <p className="cta-desc">
            Connect directly with our engineering and talent specialists in Hitech City, Hyderabad.
            Whether you need a full development team, a cloud migration, or tech staffing, we are here to help.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="theme-btn">
              Speak with an Expert <ArrowRight size={16} />
            </Link>
            <Link to="/get-quote" className="theme-btn blue">
              <MessageCircle size={16} /> Get A Quote via WhatsApp
            </Link>
          </div>
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
