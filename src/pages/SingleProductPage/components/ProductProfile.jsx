import React from 'react';
import Carousel from './Carousel';

export default function ProductProfile() {
  return (
    <div className="row product-profile mt-0 g-3">
      <div className="col-6">
        <div className="product-profile__image-box">
          <div className="product-profile__top-div">
            <Carousel />
          </div>
          <div className="product-profile__bottom-div">
            <div className="product-profile__bottom-div__image-div active" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
              <img alt="product" />
            </div>
            <div className="product-profile__bottom-div__image-div" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
              <img alt="product" />
            </div>
            <div className="product-profile__bottom-div__image-div" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
              <img alt="product" />
            </div>
            <div className="product-profile__bottom-div__image-div" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">
              <img alt="product" />
            </div>
            <div className="product-profile__bottom-div__image-div" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5">
              <img alt="product" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="product-profile__info-div">
          <div className="product-profile__info-item">
            <h5 className="product-profile__info-title">Name:</h5>
            <h5 className="product-profile__info-value">iPhone 11 Pro Max</h5>
          </div>
          <div className="product-profile__info-item">
            <h5 className="product-profile__info-title">Price:</h5>
            <h5 className="product-profile__info-value">$ 348</h5>
          </div>
          <div className="product-profile__info-item">
            <h5 className="product-profile__info-title">Details:</h5>
            <h6 className="product-profile__info-value">Brand new iphone 11 pro max, navy blue colour with 64 GB internal memory and comes with a charger and a phone case.</h6>
          </div>
          <div className="product-profile__info-item">
            <h5 className="product-profile__info-title">Vendor:</h5>
            <h5 className="product-profile__info-value">Kwame Bini</h5>
          </div>
          <div className="product-profile__info-item">
            <h5 className="product-profile__info-title">Status:</h5>
            <h5 className="product-profile__info-value">Pending</h5>
          </div>
        </div>
        <button className="product-profile__post-button mt-3" type="button">Post Item</button>
        <button className="product-profile__post-button" type="button">Block Item</button>
      </div>
    </div>
  );
}
