import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, MapPin, Mail, Clock, Phone } from "lucide-react";
import { navLinks } from "../data";
import { company } from "../company";
import Logo from "./Logo";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-brand">
            <a href="#home" aria-label={company.name}>
              <Logo compact />
            </a>
          </div>
          <div className="topbar-info">
            <div className="topbar-item">
              <MapPin size={16} />
              <span>{company.address}</span>
            </div>
            <div className="topbar-item">
              <Mail size={16} />
              <a href={company.emailHref}>{company.email}</a>
            </div>
            <div className="topbar-item">
              <Clock size={16} />
              <span>{company.hours}</span>
            </div>
            <div className="topbar-item">
              <Phone size={16} />
              <a href={company.phoneHref}>{company.phone}</a>
            </div>
          </div>
          <a href="#contact" className="theme-btn blue topbar-cta">
            Get A Quote
          </a>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <a href="#home" className="logo" aria-label={company.name}>
            <Logo />
          </a>

          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className={link.children ? "has-dropdown" : ""}
                  onMouseEnter={() => link.children && setServicesOpen(true)}
                  onMouseLeave={() => link.children && setServicesOpen(false)}
                >
                  <a href={link.href}>
                    {link.label}
                    {link.children && <ChevronDown size={14} />}
                  </a>
                  {link.children && servicesOpen && (
                    <ul className="dropdown">
                      {link.children.map((child) => (
                        <li key={child}>
                          <a href="#services">{child}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a href="#contact" className="theme-btn header-cta">
            Get A Quote
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <>
          <div className="mobile-drawer open">
            <div className="drawer-header">
              <Logo compact />
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <ul className="drawer-nav">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </a>
                  {link.children && (
                    <ul className="drawer-sub">
                      {link.children.map((child) => (
                        <li key={child}>
                          <a href="#services" onClick={() => setMenuOpen(false)}>
                            {child}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="theme-btn"
              onClick={() => setMenuOpen(false)}
            >
              Get A Quote
            </a>
          </div>
          <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
        </>
      )}
    </>
  );
}
