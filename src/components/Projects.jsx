import { MonitorSmartphone, Smile, BarChart3 } from "lucide-react";
import { projectItems, processSteps } from "../data";
import "./Projects.css";

const highlights = [
  { icon: MonitorSmartphone, label: "Modern technology delivery" },
  { icon: Smile, label: "Customer-focused approach" },
  { icon: BarChart3, label: "Data, AI & enterprise platforms" },
];

export default function Projects() {
  return (
    <>
      <section className="projects-section section-space" id="careers">
        <div className="container">
          <div className="projects-intro" data-reveal>
            <span className="section-label">Talent & Delivery</span>
            <p>
              BTC builds a talent pool across software engineering, data, cloud,
              testing, UI/UX, enterprise applications and support functions—
              using structured screening and development practices for freshers,
              graduates, B.Tech candidates, diploma holders and experienced
              professionals.
            </p>
          </div>

          <div className="project-chips">
            {projectItems.map((item, i) => (
              <div
                className="project-chip"
                key={item}
                data-reveal
                data-delay={String(i + 1)}
              >
                <img src="/assets/img/icon/aboutIcon1_1.svg" alt="" />
                <h5>{item}</h5>
              </div>
            ))}
          </div>

          <div className="project-details">
            <div className="project-details-media" data-reveal="left">
              <div data-parallax="0.12">
                <img src="/project-thumb.jpg" alt="Project showcase" />
              </div>
            </div>
            <div className="project-details-content" data-reveal="right">
              <h3>Built around Technology, Talent & Tomorrow</h3>
              <p>
                We help startups, SMEs, educational institutions, and established
                organizations adopt digital solutions while also creating growth
                pathways for graduates, freshers, and experienced professionals.
              </p>
              <div className="highlights">
                {highlights.map(({ icon: Icon, label }) => (
                  <div className="highlight" key={label}>
                    <div className="icon">
                      <Icon size={20} />
                    </div>
                    <h6>{label}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-space">
        <div className="container process-grid">
          {processSteps.map((step, i) => (
            <article
              className="process-card"
              key={step.num}
              data-reveal
              data-delay={String(i + 1)}
            >
              <span className="process-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
