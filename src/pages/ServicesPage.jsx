import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "../data";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import "./ServicesPage.css";

const categories = [
  "All",
  "Engineering",
  "Infrastructure",
  "Enterprise",
  "Intelligence",
  "Quality",
  "Talent",
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <span className="page-badge">Comprehensive Technology Services</span>
          <h1 className="page-title">
            Enterprise Software, Cloud Architecture & Technology Talent
          </h1>
          <p className="page-subtitle">
            BTC Consultancy Private Limited delivers cross-functional digital capabilities.
            Explore our specialized service divisions below or request a tailored estimate for your project.
          </p>
          <div className="page-hero-actions">
            <Link to="/get-quote" className="theme-btn">
              <WhatsAppIcon size={18} /> Get A Quote via WhatsApp
            </Link>
            <Link to="/contact" className="theme-btn blue">
              Speak with an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Services Explorer */}
      <section className="services-list-section section-space">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-pill ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {cat !== "All" && (
                  <span className="cat-count">
                    {services.filter((s) => s.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="services-deep-grid">
            {filteredServices.map((service, index) => (
              <article className="service-deep-card" key={service.slug}>
                <div className="service-card-media">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    loading="lazy"
                    className="service-img"
                  />
                  <span className="service-category-badge">{service.category}</span>
                </div>

                <div className="service-card-body">
                  <span className="service-card-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2>{service.title}</h2>
                  <p className="service-tagline">{service.tagline}</p>
                  <p className="service-desc-text">{service.desc}</p>

                  <div className="service-features-list">
                    <h4>Key Offerings:</h4>
                    <ul>
                      {service.features.slice(0, 3).map((feat) => (
                        <li key={feat.title}>
                          <CheckCircle2 size={16} className="feat-check" />
                          <span>{feat.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-tech-tags">
                    {service.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 5 && (
                      <span className="tech-tag more">
                        +{service.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  <div className="service-card-footer">
                    <Link
                      to={`/services/${service.slug}`}
                      className="service-detail-btn"
                    >
                      Service Details <ArrowRight size={15} />
                    </Link>
                    <Link
                      to={`/get-quote?service=${encodeURIComponent(service.title)}`}
                      className="service-quote-btn"
                      title="Request Quote"
                    >
                      Get Quote <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="services-bottom-cta">
            <div className="services-bottom-content">
              <h3>Have a multi-disciplinary or complex enterprise scope?</h3>
              <p>
                Our cross-functional architects can structure a hybrid squad across software development,
                cloud, and platform engineers.
              </p>
            </div>
            <div className="services-bottom-actions">
              <Link to="/contact" className="theme-btn">
                Speak with an Expert
              </Link>
              <Link to="/get-quote" className="theme-btn blue">
                Request WhatsApp Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
