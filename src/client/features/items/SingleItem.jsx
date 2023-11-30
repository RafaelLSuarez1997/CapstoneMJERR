import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useGetItemQuery } from "./itemSlice"; 
import "./Singleitem.less";
//
import { ShopContext } from "../cart/ShopContext";

export default function SingleItem() {
  const { id } = useParams();
  //
  
  const { data: item, isLoading } = useGetItemQuery(id); 
  const [ selectedSize, setSelectedSize ] = useState(0);
  //
  const { addToCart } = useContext(ShopContext);
  console.log("Received item data:", item);

  const handleSizeChange = (e) => { 
    setSelectedSize(e.target.value); 
  }
  
  // 
  const handleAddToCart = () => {
    addToCart(item.id);
  }


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="single-item-container">
      <img src={item.imageUrl} alt={item.brand} className="item-image" />
      <div className="item-details">
        <h2>{item.brand}</h2>
        <p>Category: {item.category}</p>
        <label className="size-range">Select Size:</label>
          <input
             type="range"
             id="size"
             name="size"
             min="0"
             max="20"
             step="0.5"
             value={selectedSize}
             onChange={handleSizeChange}
          />
        <p>Selected Size: {selectedSize}</p>
        <p>Price: ${item.price}</p>
        <p>Description: {item.description}</p>
      </div>
      <button className="addtocartbutton" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}