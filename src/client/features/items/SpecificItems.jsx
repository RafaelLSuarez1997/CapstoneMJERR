import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemQuery } from "./itemSlice";
import "./SpecificItems.less"; 

export default function SpecificItems() {
  const { id } = useParams();
  const { data: item, isLoading } = useGetItemQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div className="specific-item-container">
      <img src={item.imageUrl} className="specific-item-image" />
      <div className="specific-item-details">
        <p className="specific-item-brand">{item.brand}</p>
        <p className="specific-item-category">{item.category}</p>
        <p className="specific-item-price">{item.price}</p> 
      </div>
    </div>
  );
}
