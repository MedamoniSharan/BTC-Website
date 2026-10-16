import { useEffect, useState } from "react";
import Logo from "./Logo";
import "./Preloader.css";

export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1000);
    const t2 = setTimeout(() => setGone(true), 1500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div className={`preloader ${hiding ? "hide" : ""}`}>
      <Logo className="preloader" />
    </div>
  );
}
