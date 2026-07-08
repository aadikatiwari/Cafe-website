import React from "react";
import "./About.css";
import {
  FaCoffee,
  FaBreadSlice,
  FaWifi,
  FaLeaf,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCoffee />,
    title: "Premium Coffee",
    desc: "Freshly brewed coffee prepared from carefully selected beans."
  },
  {
    icon: <FaBreadSlice />,
    title: "Fresh Bakery",
    desc: "Delicious cakes, pastries and sandwiches baked every day."
  },
  {
    icon: <FaWifi />,
    title: "Free Wi-Fi",
    desc: "Work, study or relax with high-speed internet."
  },
  {
    icon: <FaLeaf />,
    title: "Organic Ingredients",
    desc: "Healthy and sustainable ingredients in every recipe."
  }
];

const About = () => {
  return (
    <section className="about" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900"
          alt="Coffee"
        />
      </div>

      <div className="about-content">

        <h4>ABOUT US</h4>

        <h2>
          More than Coffee,
          <span> It's an Experience.</span>
        </h2>

        <p>
          Brew Haven Café is a warm and welcoming place where
          handcrafted coffee meets freshly baked treats.
          Whether you're catching up with friends or working
          remotely, every visit feels special.
        </p>

        <div className="features">

          {features.map((item, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default About;