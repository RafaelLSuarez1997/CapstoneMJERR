import { useGetItemsQuery } from './itemSlice';
import { Link } from 'react-router-dom';
import './items.less';
import HomeNavbar from "../../layout/HomeNavbar";
import { useState, useEffect } from 'react';
import imageFullLogo from '../../assets/FullLogo.png';

export default function Items() {
  const { data: items, isLoading } = useGetItemsQuery();
  const [randomShoes, setRandomShoes] = useState([]);
  const [currentRandomShoeIndex, setCurrentRandomShoeIndex] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (items && items.length > 0) {
      const randomIndexes = Array.from({ length: 10 }, () => Math.floor(Math.random() * items.length));
      const randomShoesList = randomIndexes.map(index => items[index]);
      setRandomShoes(randomShoesList);
    }
  }, [items]);

  useEffect(() => {
    if (randomShoes.length > 1) {
      const timer = setInterval(() => {
        setCurrentRandomShoeIndex((prevIndex) => (prevIndex + 1) % randomShoes.length);
      }, 5000); 
      setTimerId(timer);


      return () => {
        clearInterval(timer);
      };
    }
  }, [randomShoes]);

  const handleNextClick = () => {
    if (randomShoes.length > 0) {
      clearInterval(timerId); 
      setCurrentRandomShoeIndex((prevIndex) => (prevIndex + 1) % randomShoes.length);
    }
  };

  const handleBackClick = () => {
    if (randomShoes.length > 0) {
      clearInterval(timerId); 
      setCurrentRandomShoeIndex((prevIndex) => (prevIndex - 1 + randomShoes.length) % randomShoes.length);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!items) {
    return <p>No items available.</p>;
  }

  const uniqueBrands = [...new Set(items.map(item => item.brand))];

  return (
    <div>
      <HomeNavbar></HomeNavbar>
      <div className="header-container">
        <img className='imgFullLogo' src={imageFullLogo} alt='logo' />

        {randomShoes.length > 0 && (
          <Link to={`/id/${randomShoes[currentRandomShoeIndex].id}`} className="random-shoe-link">
            <div className="random-shoe-container">
              <img
                src={randomShoes[currentRandomShoeIndex].imageUrl}
                alt={randomShoes[currentRandomShoeIndex].brand}
                className="random-shoe-image"
              />
              <div className="random-shoe-details">
                <p className="brand">{randomShoes[currentRandomShoeIndex].brand}</p>
                <p className="price">${randomShoes[currentRandomShoeIndex].price}</p>
              </div>
            </div>
          </Link>
        )}

        {randomShoes.length > 1 && (
          <>
            <button onClick={handleBackClick} className="nav-button">
              Back
            </button>
            <button onClick={handleNextClick} className="nav-button">
              Next
            </button>
          </>
        )}
      </div>

      <div className="brand-links">
        {uniqueBrands.map(brand =>
          <Link key={brand} to={`/brand/${brand}`} className="brand-link">
            {brand}
          </Link>
        )}
      </div>
    </div>
  );
}