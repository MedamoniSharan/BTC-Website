import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data";
import "./FAQ.css";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq-section section-space" id="blogs">
      <div className="container faq-grid">
        <div className="faq-media" data-reveal="left">
          <div data-parallax="0.14">
            <img className="faq-img-1" src="/images/home-faq1.jpg" alt="Support team" />
            <img className="faq-img-2" src="/images/home-faq2.jpg" alt="Client meeting" />
          </div>
        </div>

        <div className="faq-content" data-reveal="right">
          <span className="section-label">Faq's</span>
          <p className="faq-lead">
            Explore our frequently asked questions to gain a better understanding
            of our offerings and approach.
          </p>

          <div className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                  <button
                    className="faq-question"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <h5>{item.q}</h5>
                    <span className="faq-icon">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className="faq-answer"
                    style={{ maxHeight: isOpen ? "220px" : "0px" }}
                  >
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
