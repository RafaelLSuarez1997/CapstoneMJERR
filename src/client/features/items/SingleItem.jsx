// SingleItem.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemsQuery } from "./itemSlice";

export default function SingleItem() {
  const { id } = useParams();
  const { data: item, isLoading } = useGetItemsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h2>{item.brand}</h2>
      <img src={item.imageUrl} alt={item.brand} />
      <p>Category: {item.category}</p>
      <p>Size: {item.size}</p>
    </div>
  );
}
