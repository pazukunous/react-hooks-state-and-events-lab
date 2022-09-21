import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, updateCat] = useState("All")

  function changeFilter(event){
    updateCat(event.target.value)
    //console.log(event.target.value)
  }

  const newItemList = items.filter((item) => {
    if (selectedCategory === "All"){
      return item
    }

    if (item.category === selectedCategory){
      return item
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
