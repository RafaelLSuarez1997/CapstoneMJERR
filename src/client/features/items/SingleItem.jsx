import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetItemQuery, useGetItemsQuery } from "./itemSlice"; 
import "./Singleitem.less";
import { selectToken } from "../auth/authSlice"
import { ShopContext } from "../cart/ShopContext";
import { useSelector } from "react-redux";
import { Brandy } from "phosphor-react";

export default function SingleItem() {
  const token = useSelector(selectToken)
  const { id } = useParams();
  const { data: currentItem, isLoading } = useGetItemQuery(id);
  const [selectedSize, setSelectedSize] = useState(0)
  
//

if (isLoading) {
  return <p>Loading....</p>;
}


return token ? (
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
      </div>
    </div>
    <div className="recommended-items">
      <h3>Recommended Items:</h3>
      {recommendedItems.map((item) => (
        <Link key={item.id} to={`/${item.id}`} className="recommended-item">
          <img src={item.imageUrl} alt={item.brand} />
          <p>{item.brand}</p>
          <p>${item.price}</p>
        </Link>
      ))}
    </div>
  </div>
) : (
  // You can redirect the user to the login page or display a message
  <p>Please log in to view this item.</p>
);

}








  // useEffect(() => {
  //   if (!isItemLoading && !isAllItemsLoading && currentItem && allItems) {
  //     const filteredItems = allItems.filter(item => item.id !== currentItem.id);
  //     const randomRecommendations = getRandomItems(filteredItems, 5);
  //     setRecommendedItems(randomRecommendations);
  //   }
  // }, [isItemLoading, isAllItemsLoading, currentItem, allItems]);


// if (isLoading) return <p>is loading</p>



//   const getRandomItems = (items, count) => {
//     const shuffledItems = items.sort(() => 0.5 - Math.random());
//     return shuffledItems.slice(0, count);
//   };

//   const handleSizeChange = (e) => {
//     setSelectedSize(e.target.value);
//   };

//   const handleAddToCart = () => {
//     addToCart(currentItem.id, selectedSize);
//   };

//   // if (isItemLoading || isAllItemsLoading) {
//   //   return <p>Loading...</p>;
//   // }

//   if (!currentItem) {
//     return <p>Item not found</p>;
//   }
// if (token) {
//   return (
//     <div>
//       <div className="single-item-container">
//         <img src={currentItem.imageUrl} alt={currentItem.brand} className="item-image" />
//         <div className="item-details">
//           <p className="item-brand">{currentItem.brand}</p>
//           <p className="item-category">{currentItem.category}</p>
//           <p className="item-size">${currentItem.price}</p>
//           <label className="size-range">Select Size:</label>
//           <input
//             type="range"
//             id="size"
//             name="size"
//             min="0"
//             max="20"
//             step="0.5"
//             value={selectedSize}
//             onChange={handleSizeChange}
//           />
//           <p>Selected Size: {selectedSize}</p>
//           <p>Description: {currentItem.description}</p>
//           <button className="addtocartbutton" onClick={handleAddToCart}>
//             Add to Cart
//           </button>
//         </div>
//       </div>
//       <div className="recommended-items">
//         <h3>Recommended Items:</h3>
//         {recommendedItems.map(item => (
//           <Link key={item.id} to={`/${item.id}`} className="recommended-item">
//             <img src={item.imageUrl} alt={item.brand} />
//             <p>{item.brand}</p>
//             <p>${item.price}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
//         }
//         else {
//           <p>Please Log In</p>
//         }
//
