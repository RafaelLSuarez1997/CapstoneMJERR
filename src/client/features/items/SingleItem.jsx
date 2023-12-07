import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetItemQuery, useGetItemsQuery } from "./itemSlice";
import "./Singleitem.less";
import { ShopContext } from "../cart/ShopContext";



export default function SingleItem() {
  const { id } = useParams();
  const { data: currentItem, isLoading: isItemLoading } = useGetItemQuery(id);
  const { data: allItems, isLoading: isAllItemsLoading } = useGetItemsQuery();
  const [selectedSize, setSelectedSize] = useState(0);
  const { addToCart } = useContext(ShopContext);
  const [recommendedItems, setRecommendedItems] = useState([]);

  useEffect(() => {
    if (!isItemLoading && !isAllItemsLoading && currentItem && allItems) {
      const filteredItems = allItems.filter(item => item.id !== currentItem.id);
      const randomRecommendations = getRandomItems(filteredItems, 5);
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
  };

  const handleAddToWishlist = () => {
    // Add logic to send a request to your API endpoint for adding to the wishlist
    console.log('Added to Wishlist:', currentItem.id);
  };

  const handleRemoveFromWishlist = () => {
    // Add logic to send a request to your API endpoint for removing from the wishlist
    console.log('Removed from Wishlist:', currentItem.id);
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
            min="0"
            max="20"
            step="0.5"
            value={selectedSize}
            onChange={handleSizeChange}
          />
          <p>Selected Size: {selectedSize}</p>
          <p>Description: {currentItem.description}</p>
          <button className="addtocartbutton" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="wishlist-button" onClick={handleAddToWishlist}>
            Add to Wishlist
          </button>
          <button className="wishlist-button" onClick={handleRemoveFromWishlist}>
            Remove from Wishlist
          </button>
        </div>
      </div>
      <div className="recommended-items">
        <h3>Recommended Items:</h3>
        {recommendedItems.map((item) => (
          <Link key={item.id} to={`/id/${item.id}`} className="recommended-item">
            <img src={item.imageUrl} alt={item.brand} />
            <p>{item.brand}</p>
            <p>${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}