import { useGetItemsQuery } from "./itemSlice";
import React from "react";
import { Link } from "react-router-dom";
import "./items.less";


export default function Items() {
    const { data: items, isLoading } = useGetItemsQuery();
    console.log(items);
    if (isLoading) {
      return <p>is loading</p>;
    }
  
    return (
      <div className="items-container">
        {items.map((item) => (
          <Link to={`/${item.id}`} key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.brand} className="item-image" />
            <div className="item-details">
              <p className="item-brand">{item.brand}</p>
              <p className="item-category">{item.category}</p>
              <p className="item-size">{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }