import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetItemQuery } from "./itemSlice"; 


export default function SingleItem() {
  const { id } = useParams();
  const { data: item, isLoading } = useGetItemQuery(id); 
  const [selectedSize, setSelectedSize] = useState(0);
  // console.log("Received item data:", item);


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

const handleSizeChange = (e) => {
  setSelectedSize(e.target.value); //
}

  return (
    <div>
      <h2>{item.brand}</h2>
      <img src={item.imageUrl} alt={item.brand} />
      <p>${item.price}</p>
      <p>Category: {item.category}</p> <br />
      <p>Details: {item.description}</p> <br />
      <label htmlFor="size">Select Size:</label>
      <input
        type="range"
        id="size"
        name="size"
        min="0.0"
        max="20.0"
        step="0.5"
        value={selectedSize}
        onChange={handleSizeChange}
      />
      <p>Selected Size: {selectedSize}</p>

    </div>
  );
}
