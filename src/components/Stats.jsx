import { FolderCheck, Users, Award, Cpu, ArrowUpRight } from "lucide-react";
import { companyStats } from "../data";
import { Link } from "react-router-dom";
import "./Stats.css";

const statIcons = [FolderCheck, Users, Award, Cpu];

export default function Stats() {
  return (
    <section className="stats-section section-space">
      <div className="container">
        <div className="stats-intro" data-reveal>
          <span className="section-label">Proven Track Record</span>
          <h2 className="section-title">
            Measurable Results Built on Disciplined Engineering
          </h2>
          <p className="section-text">
            Delivering business-critical software solutions, modern cloud
            architectures, and high-caliber talent pipelines for organizations worldwide.
          </p>
        </div>

        <div className="stats-grid">
          {companyStats.map((item, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                className="stat-card"
                key={item.label}
                data-reveal="zoom"
                data-delay={String(idx + 1)}
              >
                <div className="stat-card-header">
                  <div className="stat-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <span className="stat-badge">{item.suffix}</span>
                </div>
                <div className="stat-number-wrap">
                  <span className="stat-number">{item.value}</span>
                </div>
                <h3 className="stat-title">{item.label}</h3>
                <p className="stat-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="stats-cta-banner" data-reveal="fade">
          <div className="stats-cta-text">
            <h4>Ready to start your next technology initiative?</h4>
            <p>
              Get a custom project estimate with milestone delivery plans within 24 hours.
            </p>
          </div>
          <div className="stats-cta-actions">
            <Link to="/get-quote" className="theme-btn">
              Get A Quote via WhatsApp <ArrowUpRight size={16} />
            </Link>
            <Link to="/contact" className="theme-btn blue">
              Speak with an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
