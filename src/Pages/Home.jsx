import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Menu from "../Components/Menu/Menu";
import SpecialOffers from "../Components/SpecialOffers/SpecialOffers";
import Gallery from "../Components/Gallery/Gallery";
import Testimonials from "../Components/Testimonials/Testimonials";
import Stats from "../Components/Stats/Stats";
import Reservation from "../Components/Reservations/Reservations";
import Contact from "../Components/Contact/Contact";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default Home;