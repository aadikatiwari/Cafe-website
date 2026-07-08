import { useEffect, useState } from "react";
import API from "../api/api";
import "./Admin.css";

export default function Dashboard() {

  const [stats, setStats] = useState({
    reservations: 0,
    contacts: 0,
    subscribers: 0,
    menuItems: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const res = await API.get("/admin/stats");
      setStats(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">

      <h1>Admin Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h2>{stats.reservations}</h2>
          <p>Reservations</p>
        </div>

        <div className="card">
          <h2>{stats.contacts}</h2>
          <p>Messages</p>
        </div>

        <div className="card">
          <h2>{stats.subscribers}</h2>
          <p>Subscribers</p>
        </div>

        <div className="card">
          <h2>{stats.menuItems}</h2>
          <p>Menu Items</p>
        </div>

      </div>

    </div>
  );
}