import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components (Eagerly loaded because they appear on every page)
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages (Lazy loaded for performance)
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Service = lazy(() => import("./Pages/Service"));
const Training = lazy(() => import("./Pages/Training"));

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* Suspense shows a fallback while the lazy page is loading */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center text-uss-navy font-bold">
            Loading Security Portal...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
