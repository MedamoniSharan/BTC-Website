import { MessageCircle } from "lucide-react";
import { company } from "../company";
import "./WhatsAppWidget.css";

export default function WhatsAppWidget() {
  return (
    <a
      href={company.whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float-widget"
      aria-label="Chat with BTC Consultancy on WhatsApp"
    >
      <div className="whatsapp-float-icon">
        <MessageCircle size={28} />
      </div>
      <span className="whatsapp-float-tooltip">
        <strong>Instant Quote?</strong>
        <span>Chat on WhatsApp</span>
      </span>
    </a>
  );
}
