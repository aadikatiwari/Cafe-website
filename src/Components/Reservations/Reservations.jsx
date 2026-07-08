import { useState } from "react";
import API from "../../api/api";
import "./Reservations.css";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await API.post(
        "/reservations",
        form
      );

      alert(response.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
      });

    } catch (error) {
      alert("Reservation Failed");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <section className="reservation">

      <h2>Reserve a Table</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="guests"
          type="number"
          placeholder="Guests"
          value={form.guests}
          onChange={handleChange}
          required
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          name="time"
          type="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {loading ? "Booking..." : "Reserve Table"}
        </button>

      </form>

    </section>
  );
}