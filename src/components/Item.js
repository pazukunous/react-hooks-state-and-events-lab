import React, { useState } from "react";

function Item({ name, category }) {

  const [cartStatus, inCart] = useState("")

  function changeCart(){
    if (cartStatus === ""){
      inCart("in cart")
    }
    else{
      inCart("")
    }
  }

  const cartText = (cartStatus==="") ? "Add to Cart" : "Remove from Cart"

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCart}>{cartText}</button>
    </li>
  );
}

export default Item;
