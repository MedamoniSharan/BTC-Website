import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { services, serviceGrid } from "../data";
import "./Services.css";

export default function Services() {
  const [index, setIndex] = useState(0);
  const max = Math.max(0, services.length - 3);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <>
      <section className="services-section section-space" id="services">
        <div className="container">
          <div className="services-intro" data-reveal>
            <span className="section-label">Our Services</span>
            <h2 className="section-title">
              Technology Services Built for Business Growth
            </h2>
            <p className="section-text">
              BTC Consultancy Private Limited delivers software development, IT
              consulting, cloud & DevOps, enterprise platforms, analytics, QA,
              design, recruitment, and training services tailored to your goals.
            </p>
          </div>

          <div className="services-carousel-wrap" data-reveal="zoom">
            <div className="carousel-controls">
              <button onClick={prev} aria-label="Previous" disabled={index === 0}>
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={next}
                aria-label="Next"
                disabled={index === max}
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="services-viewport">
              <div
                className="services-track"
                style={{ "--slide": index }}
              >
                {services.map((service) => (
                  <article className="service-card" key={service.slug}>
                    <div className="service-icon">
                      <img src={service.icon} alt="" />
                    </div>
                    <span className="service-card-tag">{service.category}</span>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link to={`/services/${service.slug}`} className="service-link">
                      Discover More <ArrowUpRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-grid-section section-space">
        <div className="container">
          <div className="services-intro center" data-reveal>
            <span className="section-label">Our Capabilities</span>
            <h2 className="section-title">Complete IT Capabilities Under One Roof</h2>
            <p className="section-text">
              From engineering and platforms to talent and training, partner with
              us for technology solutions designed for long-term growth.
            </p>
          </div>

          <div className="service-grid">
            {serviceGrid.map((item, i) => (
              <article
                className="grid-card"
                key={item.slug}
                data-reveal
                data-delay={String((i % 5) + 1)}
              >
                <span className="grid-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <Link to={`/services/${item.slug}`} className="grid-link">
                  Read more <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>

          <div className="view-all">
            <Link to="/services" className="theme-btn blue">
              View All 12 Dedicated Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
