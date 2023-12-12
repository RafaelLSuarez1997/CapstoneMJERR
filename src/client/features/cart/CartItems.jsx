import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "./cart.less";


const ShopCartItems = () => {
    const { id } = useParams("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`/products/${id}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });

                if (response.ok) {
                    const data = await response.json();
                    setItems(data);
                } else {
                    console.error("Failed to fetch cart items");
                }
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };

        fetchCartItems();
    }, [id]);

    const updateCartItem = async (itemId, updatedData) => {
        try {
            const response = await fetch(`/api/auth/users/cart/items/${itemId}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(updatedData),
            });

            if (response.ok) {
                // Handle success, e.g., update the local state or fetch items again
                console.log("Cart item updated successfully");
            } else {
                console.error("Failed to update cart item");
            }
        } catch (error) {
            console.error("Error updating cart item:", error);
        }
    };

    const deleteCartItem = async (itemId) => {
        try {
            const response = await fetch(`/api/auth/users/${userId}/cart/items/${itemId}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            if (response.ok) {
                // Handle success, e.g., update the local state or fetch items again
                console.log("Cart item deleted successfully");
            } else {
                console.error("Failed to delete cart item");
            }
        } catch (error) {
            console.error("Error deleting cart item:", error);
        }
    };

    return (
        <div className="cart-items-container">
            <h2>Your Cart</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <img src={item.imageUrl} alt={item.brand} />
                        <div>
                            <h3>{item.brand}</h3>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                            {/* Add more details as needed */}
                            <button onClick={() => updateCartItem(item.id, { /* updatedData */ })}>
                                Update
                            </button>
                            <button onClick={() => deleteCartItem(item.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShopCartItems;
