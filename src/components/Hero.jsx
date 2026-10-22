import { ArrowRight, Activity, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { heroFeatures } from "../data";
import { company } from "../company";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <img
        className="hero-shape shape-1"
        src="/assets/img/shape/heroShape1_2.png"
        alt=""
        aria-hidden="true"
        data-parallax="0.15"
      />
      <img
        className="hero-shape shape-2"
        src="/assets/img/shape/heroShape1_3.png"
        alt=""
        aria-hidden="true"
        data-parallax="0.35"
      />
      <img
        className="hero-shape shape-3"
        src="/assets/img/shape/heroShape1_1.png"
        alt=""
        aria-hidden="true"
        data-parallax="0.22"
      />

      <div className="container hero-grid">
        <div className="hero-content" data-reveal="left">
          <div className="hero-badge">
            <Activity size={16} />
            <span>{company.tagline}</span>
          </div>
          <h1>
            {company.name} delivers practical digital solutions through
            technology consulting, software development and IT services—while
            building a strong talent pipeline.
          </h1>
          <ul className="hero-features">
            {heroFeatures.map((item) => (
              <li key={item}>
                <img src="/assets/img/icon/checkmarkIcon2.svg" alt="" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="hero-buttons">
            <Link to="/get-quote" className="theme-btn">
              <MessageCircle size={17} /> Get A Quote via WhatsApp
            </Link>
            <Link to="/contact" className="theme-btn blue">
              Speak with an Expert <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="hero-media" data-reveal="right">
          <div data-parallax="0.12">
            <img
              className="hero-desktop"
              src="/assets/img/home_banner11.png"
              alt="BTC Consultancy technology solutions"
            />
            <img
              className="hero-mobile"
              src="/images/home_mobile_banner.png"
              alt="BTC Consultancy team"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
