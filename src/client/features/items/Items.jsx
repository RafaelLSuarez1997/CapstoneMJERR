import { useGetItemsQuery } from './itemSlice';
import { Link } from 'react-router-dom';
import './items.css';
import { useState, useEffect } from 'react';
import imageFullLogo from '../../assets/logoimage.png';
import nikeImg from '../../assets/Nike.png'
import adidasImg from '../../assets/Adidas.png';
import converseImg from '../../assets/Converse.png';
import jordanImg from '../../assets/Jordan.png';
import pumaImg from '../../assets/Puma.png';
import reebokImg from '../../assets/Reebok.png';
import skechersImg from '../../assets/Skechers.png';
import newBalanceImg from '../../assets/newbalance.png';



export default function Items() {
  const { data: items, isLoading } = useGetItemsQuery();
  const [randomShoes, setRandomShoes] = useState([]);
  const [currentRandomShoeIndex, setCurrentRandomShoeIndex] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (items && items.length > 0) {
      const randomIndexes = Array.from({ length: 4 }, () => Math.floor(Math.random() * items.length));
      const randomShoesList = randomIndexes.map(index => items[index]);
      setRandomShoes(randomShoesList);
    }
  }, [items]);

  useEffect(() => {
    if (randomShoes.length > 1) {
      const timer = setInterval(() => {
        setCurrentRandomShoeIndex((prevIndex) => (prevIndex + 1) % randomShoes.length);
      }, 5000); //in milliseconds
      setTimerId(timer);

      // Clear the timer when the component is unmounted
      return () => {
        clearInterval(timer);
      };
    }
  }, [randomShoes]);

  // Clear the timer
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
  const brandImages = {
    nike: nikeImg,
    adidas: adidasImg,
    converse: converseImg,
    jordan: jordanImg,
    puma: pumaImg,
    reebok: reebokImg,
    skechers: skechersImg,
    newbalance: newBalanceImg 
  };

  return (
    <div className="items-container">
      <div className="header-container">
        <img className='imgFullLogo' src={imageFullLogo} alt='logo' />

        <button onClick={handleBackClick} className="nav-button"> &#8592;</button>

        {randomShoes.length > 0 && (
          <Link to={`/${randomShoes[currentRandomShoeIndex].id}`} className="random-shoe-link">
          <div className="random-shoe-container">
            <img
              src={randomShoes[currentRandomShoeIndex].imageUrl}
              alt={randomShoes[currentRandomShoeIndex].brand}
              className="random-shoe-image"
            />
            <div className="random-shoe-text">
              <p className="brand">{randomShoes[currentRandomShoeIndex].brand}</p>
              <p className="price">${randomShoes[currentRandomShoeIndex].price}</p>
            </div>
          </div>
        </Link>
        )}

        {randomShoes.length > 1 && (
          <>
            <button onClick={handleNextClick} className="nav-button">&#8594;</button>
          </>
        )}
      </div>
      <h2>Our Brands</h2>
      <div className="brand-links">
        {uniqueBrands.map(brand => (
          <Link key={brand} to={`/brand/${brand}`} className="brand-link">
            <img 
              src={brandImages[brand.toLowerCase()]}
              alt={brand} 
              onError={(e) => { e.target.onerror = null; e.target.src = 'path-to-default-image'; }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}