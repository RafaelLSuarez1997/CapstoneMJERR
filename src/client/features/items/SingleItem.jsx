import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetItemQuery, useGetItemsQuery } from "./itemSlice";
import "./Singleitem.css";
import { ShopContext } from "../cart/ShopContext";


export default function SingleItem() {
  const { id } = useParams();
  const { data: currentItem, isLoading: isItemLoading } = useGetItemQuery(id);
  const { data: allItems, isLoading: isAllItemsLoading } = useGetItemsQuery();
  const [selectedSize, setSelectedSize] = useState(4);
  const { addToCart } = useContext(ShopContext);
  const [recommendedItems, setRecommendedItems] = useState([]);
  const [showAddToCartMessage, setShowAddToCartMessage] = useState(false);
  useEffect(() => {
    if (!isItemLoading && !isAllItemsLoading && currentItem && allItems) {
      const filteredItems = allItems.filter(item => item.id !== currentItem.id);
      const randomRecommendations = getRandomItems(filteredItems, 7);
      setRecommendedItems(randomRecommendations);
    }
  }, [isItemLoading, isAllItemsLoading, currentItem, allItems]);
  const getRandomItems = (items, count) => {
    const shuffledItems = items.sort(() => 0.5 - Math.random());
    return shuffledItems.slice(0, count);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
  const handleAddToCart = () => {
    addToCart(currentItem.id, selectedSize);
    setShowAddToCartMessage(true);
    setTimeout(() => {
      setShowAddToCartMessage(false);
    }, 3000);
  };
  if (isItemLoading || isAllItemsLoading) {
    return <p>Loading...</p>;
  }
  if (!currentItem) {
    return <p>Item not found</p>;
  }
  return (
    <div>
      <div className="single-item-container">
        <img src={currentItem.imageUrl} alt={currentItem.brand} className="item-image" />
        <div className="item-details">
          <p className="item-brand">{currentItem.brand}</p>
          <p className="item-category">{currentItem.category}</p>
          <p className="item-size">${currentItem.price}</p>
          <label className="size-range">Select Size:</label>
          <input
            type="range"
            id="size"
            name="size"
            min="4"
            max="20"
            step="0.5"
            value={selectedSize}
            onChange={handleSizeChange}
          />
          <p>Selected Size: {selectedSize}</p>
          <p>{currentItem.description}</p>
          <button className="addtocartbutton" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      {showAddToCartMessage && (
        <div className="popup">
          Item added to cart!
        </div>
      )}
      </div>
      <h3 className="recitems">Recommended Items:</h3>
      <div className="recommended-items">
        {recommendedItems.map((item) => (
          <Link key={item.id} to={`/${item.id}`} className="recommended-item">
            <img src={item.imageUrl} alt={item.brand} />
            <p>{item.brand}</p>
            <p>${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}