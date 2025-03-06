import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import NotFound from "../pages/NotFound";
import ContactPage from "../pages/ContactPage";
import Home from "../components/Home";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import Gallery from "../pages/Gallery";
import Scholarship from "../pages/Scholarship";
import CountryPage from "../pages/CountryPage";
import ChineseLanguage from "../pages/Courses/Chinese";
import MastersPage from "../pages/Courses/MastersPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/scholarship" element={<Scholarship />} />
        <Route path="/countries/:countryName" element={<CountryPage />} />
        <Route path="/courses/chinese" element={<ChineseLanguage />} />
        <Route path="/courses/masters" element={<MastersPage />} />
        {/* will be replaced in future with home page or 404 page */}
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
