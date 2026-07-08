import "./SpecialOffers.css";

export default function SpecialOffers() {
  return (
    <section className="offers">

      <div className="offer-card">
        <h2>☕ Happy Hours</h2>
        <p>Get 30% OFF on all coffees between 3 PM and 6 PM.</p>
      </div>

      <div className="offer-card">
        <h2>🍰 Combo Deal</h2>
        <p>Buy any Coffee and Cake Combo to save 20%.</p>
      </div>

      <div className="offer-card">
        <h2>🎉 Weekend Special</h2>
        <p>Free Cookie with every Latte every Saturday and Sunday.</p>
      </div>

    </section>
  );
}