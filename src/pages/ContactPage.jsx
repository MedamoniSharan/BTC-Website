import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { company } from "../company";
import { services } from "../data";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Software Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const text = `*New Contact Inquiry - Speak with Expert*\n*Name:* ${formData.name || "Prospective Client"}\n*Email:* ${formData.email || "Not specified"}\n*Phone:* ${formData.phone || "Not specified"}\n*Service of Interest:* ${formData.service}\n*Message:* ${formData.message || "I would like to speak with an expert regarding technology solutions."}`;
    window.open(
      `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <span className="contact-badge">Speak with an Expert</span>
          <h1 className="contact-title">Let’s Build Something Exceptional Together</h1>
          <p className="contact-subtitle">
            Connect directly with our engineering leadership and talent specialists in Hitech City, Hyderabad.
            We are here to discuss your digital roadmap, cloud architecture, or technology hiring goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={24} />
              </div>
              <div className="contact-card-content">
                <span className="card-label">Office Location</span>
                <h3>{company.city}</h3>
                <p>{company.address}, India</p>
                <span className="card-hint">Prime IT Corridor</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Clock size={24} />
              </div>
              <div className="contact-card-content">
                <span className="card-label">Business Hours</span>
                <h3>{company.hours}</h3>
                <p>{company.hoursNote}</p>
                <span className="card-hint">Standard Operating Schedule</span>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Phone size={24} />
              </div>
              <div className="contact-card-content">
                <span className="card-label">Direct Phone</span>
                <h3>
                  <a href={company.phoneHref}>{company.phone}</a>
                </h3>
                <p>Monday to Friday, 9am - 6pm</p>
                <a href={company.phoneHref} className="card-action">
                  Call Now &rarr;
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={24} />
              </div>
              <div className="contact-card-content">
                <span className="card-label">Email Inquiries</span>
                <h3>
                  <a href={company.emailHref} className="email-link">
                    {company.email}
                  </a>
                </h3>
                <p>Quick response within 24 hours</p>
                <a href={company.emailHref} className="card-action">
                  Write to Us &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interaction Section */}
      <section className="contact-main-section section-space">
        <div className="container contact-main-grid">
          {/* Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <span className="form-eyebrow">Direct Consultation</span>
              <h2>Speak with a Technology Expert</h2>
              <p>
                Fill out the form below or submit directly through WhatsApp for immediate consultation.
              </p>
            </div>

            {submitted ? (
              <div className="contact-success-card">
                <div className="success-icon">
                  <CheckCircle2 size={48} />
                </div>
                <h3>Thank You for Reaching Out!</h3>
                <p>
                  We have received your message. Our engineering team in Hitech City will review
                  your requirements and respond within 24 hours.
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="theme-btn"
                  >
                    <WhatsAppIcon size={17} /> Open in WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="theme-btn blue"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="e.g. +91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest *</label>
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
                      <option value="General Consultation">General IT Consultation</option>
                      <option value="Talent & Training">Talent Pipeline & Training</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Project Details or Question *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project scope, timeline, current tech stack, or requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-actions-wrap">
                  <button type="submit" className="theme-btn">
                    <Send size={16} /> Submit Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="theme-btn whatsapp-action-btn"
                  >
                    <WhatsAppIcon size={17} /> Send via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Information & Map Sidebar */}
          <div className="contact-sidebar">
            {/* WhatsApp Priority Card */}
            <div className="whatsapp-priority-card">
              <div className="wa-card-header">
                <WhatsAppIcon size={26} />
                <div>
                  <h4>WhatsApp Instant Connect</h4>
                  <span>Fastest Response Time</span>
                </div>
              </div>
              <p>
                Need immediate scoping or quotes? Our technical directors and account managers
                respond via WhatsApp during working hours.
              </p>
              <a
                href={company.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="theme-btn w-full wa-btn"
              >
                Chat on WhatsApp (+91 9989237771)
              </a>
            </div>

            {/* Office Location & Map */}
            <div className="location-box">
              <div className="location-head">
                <Building2 size={20} />
                <div>
                  <h4>Hitech City Headquarters</h4>
                  <span>Hyderabad, Telangana, 500081</span>
                </div>
              </div>
              <div className="map-embed-container">
                <iframe
                  title="BTC Consultancy Office Location - Hitech City Hyderabad"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.444760887376!2d78.37512437516607!3d17.438444983457993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "12px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Confidentiality & Assurance */}
            <div className="assurance-box">
              <div className="assurance-item">
                <ShieldCheck size={20} />
                <div>
                  <strong>NDA Protected</strong>
                  <p>Your intellectual property and project concepts remain 100% confidential.</p>
                </div>
              </div>
              <div className="assurance-item">
                <Clock size={20} />
                <div>
                  <strong>Guaranteed SLA</strong>
                  <p>We provide dedicated project managers and milestone transparency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
