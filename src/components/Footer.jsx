import { MapPin, Mail, Phone, ArrowRight, Clock } from "lucide-react";
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
    <footer className="site-footer" id="contact">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h3>Stay Connected With Modern Technology Services</h3>
            <a href={company.emailHref} className="theme-btn">
              Tech Support Consultation <ArrowRight size={16} />
            </a>
          </div>
          <img src="/images/home_contact2.png" alt="" />
        </div>
      </div>

      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Logo className="footer" />
            <p>
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

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              {footerServices.map((service) => (
                <li key={service.title}>
                  <a href="#services">{service.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Contact Us</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={16} />
                <span>{company.address}</span>
              </li>
              <li>
                <Mail size={16} />
                <a href={company.emailHref}>{company.email}</a>
              </li>
              <li>
                <Phone size={16} />
                <a href={company.phoneHref}>{company.phone}</a>
              </li>
              <li>
                <Clock size={16} />
                <span>
                  {company.hours}
                  <br />
                  {company.hoursNote}
                </span>
              </li>
            </ul>

            <form
              className="newsletter"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                aria-label="Your email address"
              />
              <button type="submit" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
