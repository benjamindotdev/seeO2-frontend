import "./index.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";

//link for data "https://ourworldindata.org/travel-carbon-footprint";

const socials = {
  benjamin: "https://github.com/benjamindotdev/",
  senanu: "https://github.com/Senalniho",
};

const App = () => {
  return (
    <div className="mx-auto h-full w-[600px] md:w-[800px] lg:w-[1000px] xl:[1200px]">
      <Navbar socials={socials} />
      <main className="h-[90%] flex flex-col overflow-auto justify-start items-center">
        <Routes>
          <Route path="/" element={<LandingPage socials={socials} />} />
          <Route path="/about" element={<AboutPage socials={socials} />} />
          <Route path="/contact" element={<ContactPage socials={socials} />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
