import React from "react";
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useGetItemsByBrandQuery } from "./itemSlice";

import "./SpecificItems.less";

const SpecificItems = () => {
  const { brand } = useParams();
  const { data: items, isLoading } = useGetItemsByBrandQuery(brand);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="specific-items-container">
        {items.map((item) => 
        <Link to={`/${item.id}`} key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.brand} className="specific-item-image" />
            <div className="specific-item-details">
              <p className="specific-item-brand">{item.brand}</p>
              <p className="specific-item-category">{item.category}</p>
              <p className="specific-item-price">{item.price}</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SpecificItems;
