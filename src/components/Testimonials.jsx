import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { testimonials } from "../data";
import "./Testimonials.css";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const item = testimonials[active];

  return (
    <section className="testimonials-section section-space">
      <div className="container">
        <div className="testimonials-intro" data-reveal>
          <span className="section-label">Testimonials</span>
          <p>
            At BTC Consultancy Private Limited, we focus on quality delivery and
            long-term client relationships. Here’s what partners say about
            working with us.
          </p>
        </div>

        <div className="testimonial-card" data-reveal="zoom">
          <img
            className="quote-icon"
            src="/assets/img/icon/quoteIconDark.png"
            alt=""
          />
          <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="#f98600" color="#f98600" />
            ))}
          </div>
          <p className="testimonial-text">“{item.text}”</p>
          <div className="testimonial-author">
            <h3>{item.name}</h3>
            <span>{item.role}</span>
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={i === active ? "active" : ""}
              aria-label={`Go to slide ${String(i + 1).padStart(2, "0")}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
