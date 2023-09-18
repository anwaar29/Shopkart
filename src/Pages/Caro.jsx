import React, { useState, useEffect } from 'react';
import './Style2.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Caro = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div className="card-carousel kk">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="card">
            <img  className='cr-img' src={product.image} alt={product.title} />
            <p  className='cr-titl'><b>{product.title}</b></p>
            <span className='cr-span'>{product.description}</span>
            <h2  className='cr-price'>${product.price}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Caro;
