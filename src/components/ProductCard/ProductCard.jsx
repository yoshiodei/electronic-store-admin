import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ item }) {
  return (
    <Link to={`/product/${item.itemID}`} className="product-card" key={item.itemID}>
      <div className="product-card__image-div">
        <img src={item?.image || item?.images[0]} alt="product" className="product-card__image" />
      </div>
      <h5 className="product-card__product-price">{`$ ${item?.price}`}</h5>
      <p className="product-card__product-name">{item?.name}</p>
      <div className="product-card__product-location-div d-flex align-items-center">
        <i className="product-card__product-location-icon fa-solid fa-location-dot" />
        <p className="product-card__product-location-name">
          {item?.location?.locationIsSet ? `${item?.location?.town}, ${item?.location?.state}` : 'N/A'}
        </p>
      </div>
      <div className="product-card__product-condition-div">
        <p className="product-card__product-condition">{item?.condition}</p>
      </div>
      { false && (
        <div className="product-card__promotion-div">
          <p className="product-card__promotion">{item?.isPromoted}</p>
        </div>
      )}
    </Link>
  );
}
