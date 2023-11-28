import { useGetItemsQuery } from "./itemSlice";
import React from "react";
import { Link } from "react-router-dom";
import "./pretty1.css"

export default function MainItems() {
    const { data: items, isLoading } = useGetItemsQuery();
    console.log(items);
    if (isLoading) {
      return <p>is loading</p>;
    }
  
    return (
      <div>
        <h2>Featured Item</h2>
        <table>
          <tbody>
             {items.map((item) => ( 
              <Link to={`/${item.id}`}> 
              <tr key={item.id}>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.size}</td>
                <img src={item.imageUrl} />
             
              </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    );
  }