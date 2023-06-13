import React from 'react';

export default function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide carousel__custom">
      <div className="carousel-inner">
        <div className="carousel-item carousel-item__custom active">
          <img className="d-block" alt="product" />
        </div>
        <div className="carousel-item carousel-item__custom">
          <img className="d-block carousel__custom__dummy-image" alt="product" />
        </div>
        <div className="carousel-item carousel-item__custom">
          <img className="d-block carousel__custom__dummy-image" alt="product" />
        </div>
        <div className="carousel-item carousel-item__custom">
          <img className="d-block carousel__custom__dummy-image" alt="product" />
        </div>
        <div className="carousel-item carousel-item__custom">
          <img className="d-block carousel__custom__dummy-image" alt="product" />
        </div>
      </div>
      <button
        className="carousel-control-prev carousel__custom__button-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel__custom__button-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
