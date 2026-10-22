import { Clock, ArrowRight, MessageSquareCode } from "lucide-react";
import { Link } from "react-router-dom";
import { company } from "../company";
import { services } from "../data";
import Logo from "./Logo";
import "./Footer.css";

const socialIcons = {
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v7h4v-7h3.1l.9-4H13V9c0-.6.4-1 1-1z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A4.5 4.5 0 1 1 7.5 13 4.5 4.5 0 0 1 12 8.5zm0 2A2.5 2.5 0 1 0 14.5 13 2.5 2.5 0 0 0 12 10.5zM17.5 7.8a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H3v12h3.5V9zM4.7 3A2.1 2.1 0 1 0 4.8 7.2 2.1 2.1 0 0 0 4.7 3zM21 21h-3.5v-6.3c0-1.8-.7-3-2.4-3a2.6 2.6 0 0 0-2.4 1.7 3 3 0 0 0-.1 1.1V21H9.1s.1-10.7 0-12H12.6v1.9a4 4 0 0 1 3.5-2c2.6 0 4.9 1.7 4.9 5.4V21z" />
    </svg>
  ),
};

export default function Footer() {
  const footerServices = services.slice(0, 8);

  return (
    <footer className="site-footer" id="contact-footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div className="footer-cta-content">
            <span className="footer-cta-badge">Transform Your Technology</span>
            <h3>Stay Connected With Modern Technology Services</h3>
            <p>
              Partner with BTC Consultancy for custom software engineering, cloud migrations,
              and dedicated talent pipelines.
            </p>
            <div className="footer-cta-buttons">
              <Link to="/get-quote" className="theme-btn">
                Get A Quote on WhatsApp <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="theme-btn blue">
                Speak with an Expert
              </Link>
            </div>
          </div>
          <div className="footer-cta-graphic">
            <img src="/images/home_contact2.png" alt="BTC Consultancy" />
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand info */}
          <div className="footer-brand">
            <Logo className="footer" />
            <p className="footer-tagline-text">
              {company.tagline}. {company.capabilityStatement}
            </p>
            <div className="social-links">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                {socialIcons.facebook}
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                {socialIcons.instagram}
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                {socialIcons.linkedin}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#about">About Us</Link>
              </li>
              <li>
                <Link to="/services">All Services</Link>
              </li>
              <li>
                <Link to="/#delivery">Delivery Models</Link>
              </li>
              <li>
                <Link to="/#careers">Careers & Talent</Link>
              </li>
              <li>
                <Link to="/get-quote">Get A Quote</Link>
              </li>
              <li>
                <Link to="/contact">Speak with Experts</Link>
              </li>
            </ul>
          </div>

          {/* Individual Service links */}
          <div>
            <h3>Technology Services</h3>
            <ul className="footer-nav-list">
              {footerServices.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="footer-all-services-link">
                  View All 12 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Only Timing in Footer */}
          <div className="footer-timing-col">
            <h3>Working Hours</h3>
            <div className="footer-timing-card">
              <Clock size={22} className="footer-clock-icon" />
              <div>
                <span className="footer-timing-title">Business Operating Hours</span>
                <p className="footer-hours-val">{company.hours}</p>
                <span className="footer-hours-note">{company.hoursNote}</span>
              </div>
            </div>

            <div className="footer-reach-box">
              <div className="footer-reach-head">
                <MessageSquareCode size={18} />
                <span>Need Project Consultation?</span>
              </div>
              <p>Connect with our technical team in Hitech City, Hyderabad.</p>
              <div className="footer-links-row">
                <Link to="/contact" className="footer-reach-btn">
                  Speak with an Expert
                </Link>
                <Link to="/get-quote" className="footer-reach-btn outline">
                  Get A Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved. Headquartered in {company.city}.
          </p>
          <div className="footer-bottom-links">
            <Link to="/services">Services</Link>
            <Link to="/get-quote">WhatsApp Quotes</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
