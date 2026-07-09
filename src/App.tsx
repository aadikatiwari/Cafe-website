import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import SpecialOffers from "./Components/SpecialOffers/SpecialOffers";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Components/Testimonials/Testimonials";
import Stats from "./Components/Stats/Stats";
import Reservation from "./Components/Reservations/Reservations";
import Contact from "./Components/Contact/Contact";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import AdminLogin from "./Pages/AdminLogin";

import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <SpecialOffers />
      <Gallery />
      <Testimonials />
      <Stats />
      <Reservation />
      <Contact />
      <Newsletter />
      <Footer />
      

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/admin" element={<AdminLogin />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

    

    </>
  );
}


  



export default App;