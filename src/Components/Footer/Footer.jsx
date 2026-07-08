import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <h2>Brew Haven Café</h2>

      <p>
        Brewing happiness one cup at a time.
      </p>

      <div className="socials">

        <FaFacebook />

        <FaInstagram />

        <FaTwitter />

        <FaYoutube />

      </div>

      <hr />

      <p>
        © 2026 Brew Haven Café. All Rights Reserved.
      </p>

    </footer>
  );
}