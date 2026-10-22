import { company } from "../company";
import { WhatsAppBrandIcon } from "./WhatsAppIcon";
import "./WhatsAppWidget.css";

export default function WhatsAppWidget() {
  return (
    <aside aria-label="WhatsApp quick chat" className="whatsapp-widget-container">
      <a
        href={company.whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float-widget"
        aria-label="Chat with BTC Consultancy on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <div className="whatsapp-float-icon">
          <WhatsAppBrandIcon size={38} />
        </div>
        <span className="whatsapp-float-tooltip">
          <span className="tooltip-badge">Online</span>
          <strong>Chat on WhatsApp</strong>
          <span className="tooltip-sub">Quick Quotes & Consultation</span>
        </span>
      </a>
    </aside>
  );
}
