import { company } from "../company";
import "./Logo.css";

export default function Logo({ compact = false, className = "" }) {
  return (
    <img
      className={`btc-logo-img ${compact ? "compact" : ""} ${className}`.trim()}
      src="/logo.jpg"
      alt={company.name}
    />
  );
}
