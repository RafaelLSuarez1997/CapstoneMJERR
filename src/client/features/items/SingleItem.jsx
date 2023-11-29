import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemQuery } from "./itemSlice"; 
import "./Singleitem.less";


export default function SingleItem() {
  const { id } = useParams();
  const { data: item, isLoading } = useGetItemQuery(id); 
  console.log("Received item data:", item);


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
        <p>Size: {item.size}</p>
        <p>Price: ${item.price}</p>
        <p>Description: {item.description}</p>
      </div>
    </div>
  );
}