import React, { useState } from "react";
import "./Menu.css";

const items = [
  {
    name: "Cappuccino",
    category: "Coffee",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600"
  },
  {
    name: "Latte",
    category: "Coffee",
    price: "$5.20",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600"
  },
  {
    name: "Cheesecake",
    category: "Dessert",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600"
  },
  {
    name: "Croissant",
    category: "Bakery",
    price: "$3.50",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600"
  },
  {
    name: "Cold Coffee",
    category: "Drinks",
    price: "$4.80",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600"
  },
  {
    name: "Chocolate Brownie",
    category: "Dessert",
    price: "$4.00",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600"
  }
];

const Menu = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Coffee", "Dessert", "Bakery", "Drinks"];

  const filteredItems = items.filter(item => {
    const matchCategory =
      category === "All" || item.category === category;

    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="menu-section" id="menu">

      <h4>OUR MENU</h4>

      <h2>Popular Items</h2>

      <input
        type="text"
        placeholder="Search menu..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        className="search-box"
      />

      <div className="filter-buttons">

        {categories.map(cat=>(
          <button
            key={cat}
            onClick={()=>setCategory(cat)}
            className={category===cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}

      </div>

      <div className="menu-grid">

        {filteredItems.map((item,index)=>(
          <div className="menu-card" key={index}>

            <img src={item.image} alt={item.name}/>

            <h3>{item.name}</h3>

            <p>{item.category}</p>

            <h4>{item.price}</h4>

            <button>Add to Cart</button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Menu;