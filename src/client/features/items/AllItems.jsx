import { useGetItemsQuery } from './itemSlice';
import { Link } from 'react-router-dom';
import './AllItems.css';

export default function AllItems() {

  const { data: items, isLoading } = useGetItemsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!items) {
    return <p>no items ..</p>;
  }
  
  return (
    <div>
      <h2>All Sneakers</h2>
    <div className="items-container">
      {items.map(item =>
        <Link to={`/${item.id}`} key={item.id} className="item-card">
          <img src={item.imageUrl} alt={item.brand} className="item-image" />
          <div className="item-details">
            <p className="item-brand">
              {item.brand}
            </p>
            <p className="item-category">
              {item.category}
            </p>
            <p className="item-size">
              ${item.price}
            </p>
          </div>
        </Link>
      )}
    </div>
    </div>
  );
}