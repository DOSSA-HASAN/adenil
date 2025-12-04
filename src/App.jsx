import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/home/Home";
import AboutUs from "./Components/aboutus/AboutUs";
import Programs from "./Components/ProgramsImpact/Programs";
import GetInvolved from "./Components/GetInvolved/GetInvolved";
import ContactUs from "./Components/contact/ContactUs";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />

        <Route path="/about/programs" element={<Programs />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/about/get-involved" element={<GetInvolved />} />

        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
