import { useEffect, useRef } from "react";
import { techIcons } from "../data";
import "./Technologies.css";

export default function Technologies() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;
    let x = 0;
    const speed = 0.4;

    const tick = () => {
      x -= speed;
      const half = track.scrollWidth / 2;
      if (Math.abs(x) >= half) x = 0;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const icons = [...techIcons, ...techIcons];

  return (
    <section className="tech-section section-space">
      <div className="container tech-head" data-reveal="right">
        <div>
          <h3>Technology Capability Matrix</h3>
          <p>
            BTC packages capabilities around business outcomes—front-end,
            services, data, cloud, enterprise platforms, quality engineering and
            AI/ML—rather than treating every technology as a standalone service.
          </p>
        </div>
      </div>
      <div className="tech-marquee" data-reveal="fade">
        <div data-parallax="0.08">
          <div className="tech-track" ref={trackRef}>
            {icons.map((icon, i) => (
              <div className="tech-item" key={`${icon.name}-${i}`}>
                <img src={icon.src} alt={icon.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
