import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Technologies from "../components/Technologies";
import Services from "../components/Services";
import About from "../components/About";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Technologies />
      <Services />
      <About />
      <Profile />
      <Projects />
      <FAQ />
      <CTA />
    </main>
  );
}
