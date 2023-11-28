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
      <div>
        <h2>List of Items</h2>
        <table>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <Link to={`/${item.id}`}>
                  <img src={item.imageUrl} alt={item.brand} />
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>{item.size}</td>
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
}