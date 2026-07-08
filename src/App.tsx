import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Menu from "./Components/Menu/Menu";
import Gallery from "./Components/Gallery/Gallery";
import SpecialOffers from "./Components/SpecialOffers/SpecialOffers";
import Testimonials from "./Components/Testimonials/Testimonials";
import Stats from "./Components/Stats/Stats";

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
    </>
  );
}

export default App;