import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard() {
  return (
    <Link to="/" className="product-card">
      <div className="product-card__image-div">
        <img alt="product" className="product-card__image" />
      </div>
      <h5 className="product-card__product-price">$ 350</h5>
      <p className="product-card__product-name">iPhone 11 Pro Max</p>
      <div className="product-card__product-location-div d-flex align-items-center">
        <i className="product-card__product-location-icon fa-solid fa-location-dot" />
        <p className="product-card__product-location-name">
          Austin, Texas
        </p>
      </div>
      <div className="product-card__product-condition-div">
        <p className="product-card__product-condition">Brand New</p>
      </div>
      { false && (
        <div className="product-card__promotion-div">
          <p className="product-card__promotion">promoted</p>
        </div>
      )}
    </Link>
  );
}
