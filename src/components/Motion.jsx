import { useLocation } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { useParallax } from "../hooks/useParallax";

export default function Motion() {
  const location = useLocation();
  useReveal("body", location.pathname);
  useParallax(location.pathname);
  return null;
}
