
import React from "react";
import { useParams } from "react-router-dom";
import { useGetItemQuery } from "./itemSlice"; 


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
    <div>
      <h2>{item.brand}</h2>
      <img src={item.imageUrl} />
      <p>Category: {item.category}</p>
      <p>Size: {item.size}</p>
    </div>
  );
}
