import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select
          defaultValue={selectedCategory}
          onChange={handleChange}
          name="filter"
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory === "All"
          ? items.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : filteredItems.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
