import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  MessageCircle,
  Clock,
  ShieldCheck,
  Zap,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import { services } from "../data";
import { company } from "../company";
import "./GetQuotePage.css";

const timelineOptions = [
  "Immediate (< 1 Month)",
  "1 – 3 Months",
  "3 – 6 Months",
  "Long-term Engagement / Retainer",
  "Exploring Options",
];

const scopeOptions = [
  "New Product / MVP Build",
  "Enterprise Software Modernization",
  "Cloud & DevOps Migration",
  "Platform Integration (ServiceNow / Salesforce / SAP)",
  "Data Analytics & AI Implementation",
  "Software QA & Automation Testing",
  "Workforce Augmentation / IT Staffing",
  "Corporate Training & Skill Development",
];

export default function GetQuotePage() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get("service") || "Software Development";

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    service: preselectedService,
    timeline: "1 – 3 Months",
    scope: "New Product / MVP Build",
    details: "",
  });

  useEffect(() => {
    const s = searchParams.get("service");
    if (s) {
      setFormData((prev) => ({ ...prev, service: s }));
    }
  }, [searchParams]);

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppQuote = (e) => {
    e.preventDefault();

    const message = `*NEW PROJECT QUOTE REQUEST - BTC CONSULTANCY*
----------------------------------------
*Client Name:* ${formData.name || "Prospective Client"}
*Organization:* ${formData.companyName || "Not specified"}
*WhatsApp/Phone:* ${formData.phone || "Not specified"}
*Email:* ${formData.email || "Not specified"}
*Selected Service:* ${formData.service}
*Estimated Timeline:* ${formData.timeline}
*Project Scope:* ${formData.scope}
----------------------------------------
*Project Requirements:*
${formData.details || "Please provide consultation and cost estimates for our requirements."}`;

    const url = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    setSent(true);
  };

  return (
    <div className="quote-page">
      {/* Hero Banner */}
      <section className="quote-hero">
        <div className="container">
          <div className="quote-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Get A Quote</span>
          </div>
          <span className="quote-badge">WhatsApp Integrated Scoping</span>
          <h1 className="quote-title">Get an Instant Project Quote via WhatsApp</h1>
          <p className="quote-subtitle">
            Configure your technical requirements below. Our solutions team in Hitech City, Hyderabad
            will review your scope and provide a transparent milestone-based cost proposal within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Quote Grid */}
      <section className="quote-main-section section-space">
        <div className="container quote-layout">
          {/* Quote Form Container */}
          <div className="quote-form-container">
            <div className="quote-form-header">
              <span className="quote-form-tag">Quote Request Builder</span>
              <h2>Project Scope & Specifications</h2>
              <p>
                Fill in your details below and click &ldquo;Request Quote via WhatsApp&rdquo; to instantly
                deliver your specifications directly to our engineering coordinators.
              </p>
            </div>

            {sent && (
              <div className="quote-sent-alert">
                <CheckCircle2 size={24} />
                <div>
                  <strong>WhatsApp Chat Initialized!</strong>
                  <p>
                    Your quote request was transferred to WhatsApp. If the chat window did not open
                    automatically, you can click below:
                  </p>
                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="quote-retry-link"
                  >
                    Open WhatsApp Chat Again &rarr;
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleWhatsAppQuote} className="quote-form">
              {/* Row 1: Contact Details */}
              <div className="quote-form-section">
                <h3 className="section-legend">1. Your Contact Information</h3>
                <div className="quote-row">
                  <div className="quote-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="quote-field">
                    <label htmlFor="companyName">Company / Organization</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="e.g. Acme Innovations"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="quote-row">
                  <div className="quote-field">
                    <label htmlFor="phone">WhatsApp Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="e.g. +91 9989237771"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="quote-field">
                    <label htmlFor="email">Business Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. priya@acme.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Service & Scope */}
              <div className="quote-form-section">
                <h3 className="section-legend">2. Technology Requirements</h3>
                <div className="quote-row">
                  <div className="quote-field">
                    <label htmlFor="service">Primary Service Required *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Multi-disciplinary Solution">
                        Multi-disciplinary Solution (Custom Squad)
                      </option>
                    </select>
                  </div>

                  <div className="quote-field">
                    <label htmlFor="timeline">Expected Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="quote-field full-width">
                  <label htmlFor="scope">Engagement Type / Scope</label>
                  <select
                    id="scope"
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                  >
                    {scopeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Description */}
              <div className="quote-form-section">
                <h3 className="section-legend">3. Project Overview & Deliverables</h3>
                <div className="quote-field full-width">
                  <label htmlFor="details">
                    Tell us about your goals, existing stack, and deliverables *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    required
                    placeholder="Describe what you want to build or modernize (e.g., We need to migrate our backend to AWS, containerize with Docker, and build a customer portal in React...)"
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="quote-actions">
                <button type="submit" className="theme-btn quote-submit-btn">
                  <MessageCircle size={18} /> Request Quote via WhatsApp
                </button>
                <a
                  href={company.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-btn blue"
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="quote-sidebar">
            {/* Direct WhatsApp Callout */}
            <div className="quote-wa-card">
              <div className="quote-wa-icon">
                <MessageCircle size={32} />
              </div>
              <h3>Fast-Track on WhatsApp</h3>
              <p>
                Prefer a quick chat? Message our technical director directly on WhatsApp for
                instant feedback.
              </p>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="theme-btn w-full quote-wa-btn"
              >
                Chat on WhatsApp Now
              </a>
              <span className="quote-phone-val">{company.phone}</span>
            </div>

            {/* Why BTC Quote */}
            <div className="quote-feature-card">
              <h4>What to Expect</h4>
              <ul className="quote-features-list">
                <li>
                  <Zap size={18} />
                  <div>
                    <strong>24-Hour Scoping Turnaround</strong>
                    <p>We review architectures and deliver detailed estimates within one business day.</p>
                  </div>
                </li>
                <li>
                  <ShieldCheck size={18} />
                  <div>
                    <strong>100% Free Consultation</strong>
                    <p>Zero obligation. We provide high-level architecture recommendations for free.</p>
                  </div>
                </li>
                <li>
                  <Clock size={18} />
                  <div>
                    <strong>Working Hours</strong>
                    <p>{company.hours} ({company.hoursNote})</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Location Note */}
            <div className="quote-location-card">
              <HelpCircle size={18} />
              <div>
                <strong>Headquartered in {company.city}</strong>
                <p>Serving startups, institutions, and enterprise clients across India and globally.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
