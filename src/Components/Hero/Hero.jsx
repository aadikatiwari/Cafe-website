import React from "react";
import "./Hero.css";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="overlay"></div>

      <div className="hero-content">
        <h3>Freshly Brewed Every Day</h3>

        <h1>
          Welcome to <span>The Cozy Cup</span>
        </h1>

        <p>
          Enjoy premium coffee, handcrafted beverages, fresh bakery items,
          and a cozy atmosphere where every cup is made with passion.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Order Now
          </button>

          <button className="secondary-btn">
            Reserve Table <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;