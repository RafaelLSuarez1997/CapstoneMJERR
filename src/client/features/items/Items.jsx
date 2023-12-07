import { useGetItemsQuery } from './itemSlice';
import { Link } from 'react-router-dom';
import './items.less';

export default function Items() {
  const { data: items, isLoading } = useGetItemsQuery();
  console.log(items);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!items) {
    return <p>no items ..</p>;
  }
  const uniqueBrands = [...new Set(items.map(item => item.brand))];

  return (
    <div>
      <div className="brand-links">
        {uniqueBrands.map(brand =>
          <Link key={brand} to={`/brand/${brand}`} className="brand-link">
            {brand}
          </Link>
        )}
      </div>
    <div className="items-container">
      {items.map(item =>
        <Link to={`/id/${item.id}`} key={item.id} className="item-card">
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
