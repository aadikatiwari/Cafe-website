import "./Contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-info">
        <h2>Contact Us</h2>

        <p><FaPhone /> +91 9876543210</p>

        <p><FaEnvelope /> hello@brewhaven.com</p>

        <p><FaMapMarkerAlt /> MG Road, Bengaluru, India</p>

      </div>

      <iframe
        title="Google Map"
        src="https://www.google.com/maps?q=Bengaluru&output=embed"
        loading="lazy"
      ></iframe>

    </section>
  );
}