import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Clock, ArrowRight } from "lucide-react";
import { navLinks, services } from "../data";
import { company } from "../company";
import Logo from "./Logo";
import "./Header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

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

  // Handle smooth scroll for hash links when on home page
  const handleHashClick = (e, href) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (location.pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* Topbar: Only timing + quick quote action */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-brand">
            <Link to="/" aria-label={company.name}>
              <Logo compact />
            </Link>
          </div>

          <div className="topbar-info">
            <div className="topbar-item topbar-timing-only">
              <Clock size={16} />
              <span className="timing-label">Business Hours:</span>
              <span className="timing-value">{company.hours}</span>
              <span className="timing-sep">•</span>
              <span className="timing-note">{company.hoursNote}</span>
            </div>
          </div>

          <div className="topbar-actions">
            <Link to="/get-quote" className="theme-btn blue topbar-cta">
              Get A Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <Link to="/" className="logo" aria-label={company.name}>
            <Logo />
          </Link>

          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link) => {
                const isServices = link.label === "Services";
                const isHash = link.href.startsWith("/#");

                return (
                  <li
                    key={link.label}
                    className={isServices ? "has-dropdown" : ""}
                    onMouseEnter={() => isServices && setServicesOpen(true)}
                    onMouseLeave={() => isServices && setServicesOpen(false)}
                  >
                    {isHash ? (
                      <a
                        href={location.pathname === "/" ? link.href.replace("/", "") : link.href}
                        onClick={(e) => handleHashClick(e, link.href)}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href}>
                        {link.label}
                        {isServices && <ChevronDown size={14} />}
                      </Link>
                    )}

                    {isServices && servicesOpen && (
                      <div className="dropdown services-dropdown">
                        <div className="dropdown-header">
                          <span>Technology Capabilities</span>
                          <Link
                            to="/services"
                            className="dropdown-all-link"
                            onClick={() => setServicesOpen(false)}
                          >
                            All Services <ArrowRight size={12} />
                          </Link>
                        </div>
                        <div className="dropdown-grid">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              to={`/services/${service.slug}`}
                              className="dropdown-item"
                              onClick={() => setServicesOpen(false)}
                            >
                              <span className="dropdown-item-title">{service.title}</span>
                              <span className="dropdown-item-cat">{service.category}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/get-quote" className="theme-btn header-cta">
              Get A Quote
            </Link>
            <button
              className="menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <div className="mobile-drawer open">
            <div className="drawer-header">
              <Logo compact />
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="drawer-timing">
              <Clock size={16} />
              <div>
                <strong>Operating Hours</strong>
                <p>{company.hours}</p>
              </div>
            </div>

            <ul className="drawer-nav">
              {navLinks.map((link) => {
                const isServices = link.label === "Services";
                const isHash = link.href.startsWith("/#");

                return (
                  <li key={link.label}>
                    {isHash ? (
                      <a
                        href={location.pathname === "/" ? link.href.replace("/", "") : link.href}
                        onClick={(e) => {
                          handleHashClick(e, link.href);
                          setMenuOpen(false);
                        }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link to={link.href} onClick={() => setMenuOpen(false)}>
                        {link.label}
                      </Link>
                    )}

                    {isServices && (
                      <div className="drawer-services-list">
                        <Link
                          to="/services"
                          className="drawer-all-services"
                          onClick={() => setMenuOpen(false)}
                        >
                          → View All 12 Services
                        </Link>
                        <ul className="drawer-sub">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                to={`/services/${service.slug}`}
                                onClick={() => setMenuOpen(false)}
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="drawer-ctas">
              <Link
                to="/get-quote"
                className="theme-btn w-full"
                onClick={() => setMenuOpen(false)}
              >
                Get A Quote
              </Link>
              <Link
                to="/contact"
                className="theme-btn blue w-full"
                onClick={() => setMenuOpen(false)}
              >
                Speak with an Expert
              </Link>
            </div>
          </div>
          <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />
        </>
      )}
    </>
  );
}
