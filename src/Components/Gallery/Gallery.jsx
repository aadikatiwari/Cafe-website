import "./Gallery.css";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800"
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <h4>OUR GALLERY</h4>
      <h2>Moments at Brew Haven</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            whileHover={{ scale: 1.05 }}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}