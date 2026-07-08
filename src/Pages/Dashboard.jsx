import { Link } from "react-router-dom";
import "./Admin.css";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>Brew Haven</h2>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/reservations">
          Reservations
        </Link>

        <Link to="/contacts">
          Contacts
        </Link>

        <Link to="/newsletter">
          Subscribers
        </Link>

        <Link to="/menu-manager">
          Menu
        </Link>

      </aside>

      <main className="content">

        <h1>Dashboard</h1>

        <div className="cards">

          <div className="card">
            <h2>120</h2>
            <p>Reservations</p>
          </div>

          <div className="card">
            <h2>45</h2>
            <p>Messages</p>
          </div>

          <div className="card">
            <h2>560</h2>
            <p>Subscribers</p>
          </div>

          <div className="card">
            <h2>35</h2>
            <p>Menu Items</p>
          </div>

        </div>

      </main>

    </div>
  );
}