import "./Testimonials.css";

const reviews = [
  {
    name: "Rahul",
    text: "The cappuccino was amazing. Cozy ambience and friendly staff.",
    stars: "★★★★★"
  },
  {
    name: "Priya",
    text: "Best cheesecake in town. I'll definitely visit again.",
    stars: "★★★★★"
  },
  {
    name: "Aman",
    text: "Loved the cold coffee and the peaceful environment.",
    stars: "★★★★★"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="reviews">

      <h4>TESTIMONIALS</h4>

      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">

        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <h3>{review.stars}</h3>
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}

      </div>

    </section>
  );
}