import { useReveal } from "../hooks/useReveal";
import { useParallax } from "../hooks/useParallax";

export default function Motion() {
  useReveal("main");
  useParallax();
  return null;
}
