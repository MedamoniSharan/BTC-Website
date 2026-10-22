import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Preloader from "./components/Preloader";
import ScrollToTop from "./components/ScrollToTop";
import Motion from "./components/Motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ContactPage from "./pages/ContactPage";
import GetQuotePage from "./pages/GetQuotePage";

function App() {
  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Motion />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-quote" element={<GetQuotePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <WhatsAppWidget />
    </BrowserRouter>
  );
}

export default App;
