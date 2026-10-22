import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";
import { services } from "../data";
import { company } from "../company";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import "./ServiceDetailPage.css";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter((s) => s.slug !== slug);

  const whatsappServiceUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    `Hi BTC Consultancy, I would like to get a quote and consultation for your "${service.title}" services.`
  )}`;

  return (
    <div className="service-detail-page">
      {/* Hero Banner */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <span className="current">{service.title}</span>
          </div>

          <div className="detail-hero-grid">
            <div className="detail-hero-text">
              <span className="detail-badge">{service.category} Practice</span>
              <h1 className="detail-title">{service.title}</h1>
              <p className="detail-tagline">{service.tagline}</p>
              <p className="detail-desc">{service.desc}</p>

              <div className="detail-hero-actions">
                <a
                  href={whatsappServiceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-btn"
                >
                  <WhatsAppIcon size={18} /> Request WhatsApp Quote
                </a>
                <Link to="/contact" className="theme-btn blue">
                  Speak with an Expert <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="detail-hero-media">
              <div className="detail-media-frame">
                <img src={service.heroImage} alt={service.title} className="detail-hero-img" />
                <div className="detail-media-badge">
                  <Sparkles size={16} />
                  <span>Disciplined Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <section className="detail-body-section section-space">
        <div className="container detail-layout">
          {/* Main Column */}
          <main className="detail-main-content">
            {/* Overview */}
            <article className="detail-content-block">
              <span className="block-label">Service Overview</span>
              <h2>Transforming Business Vision into Scalable Technology</h2>
              <p className="lead-paragraph">{service.overview}</p>
            </article>

            {/* Core Features & Offerings */}
            <article className="detail-content-block">
              <span className="block-label">What We Deliver</span>
              <h2>Core Capabilities & Capabilities Architecture</h2>
              <div className="capabilities-grid">
                {service.features.map((feature, i) => (
                  <div className="capability-card" key={feature.title}>
                    <div className="cap-num">{String(i + 1).padStart(2, "0")}</div>
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* Technology Stack */}
            <article className="detail-content-block">
              <span className="block-label">Tooling & Ecosystem</span>
              <h2>Technologies & Platforms We Specialize In</h2>
              <div className="tech-stack-pills">
                {service.technologies.map((tech) => (
                  <div className="tech-pill" key={tech}>
                    <Layers size={14} />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Deliverables Checklist */}
            <article className="detail-content-block">
              <span className="block-label">Tangible Outcomes</span>
              <h2>Key Project Deliverables</h2>
              <div className="deliverables-box">
                {service.deliverables.map((item) => (
                  <div className="deliverable-item" key={item}>
                    <CheckCircle2 size={18} className="deliverable-check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Business Benefits */}
            <article className="detail-content-block">
              <span className="block-label">Value Creation</span>
              <h2>Why Partner with BTC Consultancy</h2>
              <div className="benefits-grid">
                {service.benefits.map((benefit, idx) => (
                  <div className="benefit-card" key={idx}>
                    <ShieldCheck size={20} className="benefit-icon" />
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </article>

            {/* In-Page WhatsApp Quote Card */}
            <div className="service-quote-box">
              <div className="quote-box-content">
                <span className="quote-box-eyebrow">Instant Quote via WhatsApp</span>
                <h3>Ready to discuss your {service.title} requirements?</h3>
                <p>
                  Send us your project outline or connect with an architect directly in Hitech City, Hyderabad.
                  We provide free estimates and technical feasibility assessments within 24 hours.
                </p>
                <div className="quote-box-ctas">
                  <a
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn"
                  >
                    <WhatsAppIcon size={17} /> Chat on WhatsApp Now
                  </a>
                  <Link
                    to={`/get-quote?service=${encodeURIComponent(service.title)}`}
                    className="theme-btn blue"
                  >
                    Use Full Quote Form <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </main>

          {/* Sticky Sidebar */}
          <aside className="detail-sidebar">
            {/* Quick WhatsApp Connect */}
            <div className="sidebar-widget highlight-widget">
              <h4>Get Fast Quote</h4>
              <p>Chat directly with our solutions team on WhatsApp.</p>
              <a
                href={whatsappServiceUrl}
                target="_blank"
                rel="noreferrer"
                className="theme-btn w-full"
              >
                <WhatsAppIcon size={16} /> WhatsApp Quote
              </a>
              <div className="sidebar-timing">
                <Clock size={14} />
                <span>Working Hours: {company.hours}</span>
              </div>
            </div>

            {/* All Services Navigator */}
            <div className="sidebar-widget">
              <h4>All Technology Services</h4>
              <ul className="sidebar-service-links">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/services/${item.slug}`}>
                      <span>{item.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/services" className="sidebar-view-all">
                View All Services Matrix →
              </Link>
            </div>

            {/* Direct Consultation Widget */}
            <div className="sidebar-widget contact-widget">
              <h4>Need Expert Guidance?</h4>
              <p>
                Schedule an in-person or virtual consultation with our senior engineers in Hitech City.
              </p>
              <div className="sidebar-contact-info">
                <div className="sidebar-contact-item">
                  <Phone size={15} />
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
                <div className="sidebar-contact-item">
                  <Mail size={15} />
                  <a href={company.emailHref}>{company.email}</a>
                </div>
              </div>
              <Link to="/contact" className="theme-btn blue w-full">
                Speak with an Expert
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
