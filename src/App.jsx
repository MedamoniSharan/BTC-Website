import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Services from "./components/Services";
import About from "./components/About";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Motion from "./components/Motion";

function App() {
  return (
    <>
      <Preloader />
      <Motion />
      <Header />
      <main>
        <Hero />
        <Technologies />
        <Services />
        <About />
        <Profile />
        <Projects />
        <FAQ />
        <CTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;
