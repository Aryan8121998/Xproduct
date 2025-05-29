import React from 'react';
import './Xproductcard.css';

const XProductCard = () => {
  return (
    <div>
    <div className="product-card">
      <img
        src="https://www.sephora.es/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw58c51930/images/hi-res/alternates/PID_alternate5/PID_alternate5_1074/P10042190_5.jpg"
        alt="A bottle of perfume surrounded by foliage"
        className="product-image"
      />

      <div className="product-details">
        <p className="category">Perfume</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>

        <div className="product-desc">
          <p>
            A floral, solar, and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL.
          </p>
        </div>

        <div className="prices">
          <span className="sale-price">$149.99</span>
          <span className="list-price">$169.99</span>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>

      </div>
      <footer>
        <div className="attribution">
            Challange by 
          <a href="https://www.crio.do" target="_blank" rel="noopener noreferrer">
            Crio
          </a>
        </div>
      </footer>
      </div>
  );
};

export default XProductCard;
