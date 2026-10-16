import { Target, Rocket } from "lucide-react";
import { company } from "../company";
import "./About.css";

const stats = [
  { value: "12+", label: "Service Areas" },
  { value: "Multi", label: "Sector Focus" },
  { value: "Talent", label: "Pipeline & Training" },
];

export default function About() {
  return (
    <section className="about-section section-space" id="about">
      <div className="container about-grid">
        <div className="about-media" data-reveal="left">
          <img
            className="about-shape s1"
            src="/assets/img/shape/aboutShape1_1.png"
            alt=""
            aria-hidden="true"
            data-parallax="0.25"
          />
          <img
            className="about-shape s2"
            src="/assets/img/shape/aboutShape1_2.png"
            alt=""
            aria-hidden="true"
            data-parallax="0.18"
          />
          <div className="about-images" data-parallax="0.1">
            <img
              className="img-main"
              src="/images/home-about-1.jpg"
              alt="Team collaboration"
            />
            <img
              className="img-side"
              src="/images/home-about-2.avif"
              alt="Technology workspace"
            />
            <div className="about-badge">
              <img src="/logo.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="about-content" data-reveal="right">
          <span className="section-label">Company Overview</span>
          <h2 className="section-title">
            Practical Digital Solutions & A Strong Talent Pipeline
          </h2>
          {company.about.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}

          <div className="about-features">
            <div className="about-feature">
              <div className="icon">
                <Target size={22} />
              </div>
              <div>
                <h6>Our Vision</h6>
                <p>{company.vision}</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="icon">
                <Rocket size={22} />
              </div>
              <div>
                <h6>Our Mission</h6>
                <p>{company.mission}</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <h3>{stat.value}</h3>
                <h6>{stat.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
