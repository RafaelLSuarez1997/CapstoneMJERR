// // SpecificItems.jsx

// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useGetItemsQuery } from "./itemSlice";
// import "./specificItems.less"; // Import your specific styling

// const SpecificItems = () => {
//   const { brand } = useParams();
//   const { data: items, isLoading } = useGetItemsQuery({ brand });

//   useEffect(() => {
//     // Fetch data or perform other actions based on the brand parameter
//     // For example, you can dispatch an action to fetch items by brand
//     // dispatch(fetchItemsByBrand(brand));
//   }, [brand]);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="specific-items-container">
//       {items.map((item) => (
//         <div key={item.id} className="specific-item-card">
//           <img src={item.imageUrl} alt={item.brand} className="specific-item-image" />
//           <div className="specific-item-details">
//             <p className="specific-item-brand">{item.brand}</p>
//             <p className="specific-item-category">{item.category}</p>
//             <p className="specific-item-price">{item.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SpecificItems;
