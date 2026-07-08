import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">

      <h2>Subscribe to Our Newsletter</h2>

      <p>
        Get updates on new coffee blends, seasonal offers,
        and exclusive discounts.
      </p>

      <div className="newsletter-box">
        <input
          type="email"
          placeholder="Enter your email"
        />

        <button>Subscribe</button>
      </div>

    </section>
  );
}