import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components (Eagerly loaded because they appear on every page)
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import SecurityLoader from "./Components/SecurityLoader";
import ScrollUpButton from "./Components/ScrollUpButton";
// import ClientsPage from "./Pages/Client";

// Pages (Lazy loaded for performance)
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Service = lazy(() => import("./Pages/Service"));
const ClientsPage = lazy(() => import("./Pages/Client"));
const WhyChooseUs = lazy(() => import("./Pages/WhyChooseUs"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      {/* Suspense shows a fallback while the lazy page is loading */}
      <Suspense fallback={<SecurityLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/Client" element={<ClientsPage />} />
          <Route path="/Whyus" element={<WhyChooseUs />} />
        </Routes>
      </Suspense>
      <Footer />
      <ScrollUpButton/>
    </BrowserRouter>
  );
}

export default App;
