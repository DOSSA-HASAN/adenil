import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // SEO Support
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Home from "./Components/home/Home";
import AboutUs from "./Components/aboutus/AboutUs";
import Programs from "./Components/ProgramsImpact/Programs";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import ContactUs from "./Components/contact/ContactUs";
import Navbar from "./Components/Navbar";

// Helper component to fix the "stay at bottom" scroll issue
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* Catch-all route for 404 Not Found - Optional but recommended */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
