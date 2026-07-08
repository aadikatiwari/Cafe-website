import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes, FaCoffee } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={sticky ? "navbar active" : "navbar"}>
      <div className="logo">
        <FaCoffee className="logo-icon" />
        <span>Brew Haven</span>
      </div>

      <ul className={menu ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#reservation">Reservation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="book-btn">
        Book Table
      </button>

      <div
        className="menu-icon"
        onClick={() => setMenu(!menu)}
      >
        {menu ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;