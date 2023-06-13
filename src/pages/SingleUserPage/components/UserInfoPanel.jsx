import React from 'react';
import ProductsTab from './ProductsTab';

export default function UserInfoPanel() {
  return (
    <div className="user-profile__info-div">
      <div className="user-profile__info-item">
        <h5 className="user-profile__info-title">Name:</h5>
        <h5 className="user-profile__info-value">Kwame Bini</h5>
      </div>
      <div className="user-profile__info-item">
        <h5 className="user-profile__info-title">Location:</h5>
        <h5 className="user-profile__info-value">Austin: Texas</h5>
      </div>
      <div className="user-profile__info-item">
        <h5 className="user-profile__info-title">Bio:</h5>
        <h6 className="user-profile__info-value">
          I sell both brand new and used iPhones.
          The all come with accessories such as chargers,
          earpiece and covers which are all free of charge.
          Also get 1 year warranty on all our brand new products.
        </h6>
      </div>
      <ProductsTab />
    </div>
  );
}
