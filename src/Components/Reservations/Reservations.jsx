import "./Reservation.css";
import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Table Reserved Successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      guests: "",
      date: "",
      time: "",
    });
  };

  return (
    <section className="reservation" id="reservation">
      <h4>BOOK A TABLE</h4>
      <h2>Reserve Your Seat</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          placeholder="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          placeholder="Guests"
          name="guests"
          value={form.guests}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <button type="submit">Reserve Table</button>

      </form>
    </section>
  );
}