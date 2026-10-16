import { Briefcase, Users, ShieldCheck, Layers } from "lucide-react";
import { deliveryModels, qualityControls, targetSegments } from "../data";
import { company } from "../company";
import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile-section section-space" id="delivery">
      <div className="container">
        <div className="profile-intro" data-reveal>
          <span className="section-label">Business Profile</span>
          <h2 className="section-title">
            Delivery, Talent & Operating Framework
          </h2>
          <p className="section-text">
            A multi-disciplinary technology services model designed for software
            delivery, consulting and talent support—packaged around business
            outcomes rather than standalone tools.
          </p>
        </div>

        <div className="delivery-grid">
          {deliveryModels.map((item, i) => (
            <article
              className="delivery-card"
              key={item.title}
              data-reveal
              data-delay={String(i + 1)}
            >
              <div className="icon">
                <Briefcase size={22} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="profile-panels">
          <article className="profile-panel" data-reveal="left">
            <div className="panel-head">
              <Layers size={22} />
              <h3>Technology Integration Approach</h3>
            </div>
            <p>{company.integrationApproach}</p>
          </article>

          <article className="profile-panel" data-reveal="right">
            <div className="panel-head">
              <Users size={22} />
              <h3>Target Customer Segments</h3>
            </div>
            <p>
              Customer selection is based on legal eligibility, commercial fit,
              technical requirements and delivery capacity.
            </p>
            <div className="segment-chips">
              {targetSegments.map((segment) => (
                <span key={segment}>{segment}</span>
              ))}
            </div>
          </article>

          <article className="profile-panel wide" data-reveal>
            <div className="panel-head">
              <ShieldCheck size={22} />
              <h3>Quality, Security & Professional Controls</h3>
            </div>
            <ul className="quality-list">
              {qualityControls.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
