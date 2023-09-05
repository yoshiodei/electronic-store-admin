import React from 'react';
import ProductsTab from './ProductsTab';

export default function UserInfoPanel({ data, id }) {
  return (
    <div className="user-profile__info-div">
      <div className="user-profile__info-item">
        <h5 className="user-profile__info-title">Name:</h5>
        <h5 className="user-profile__info-value">{data?.displayName}</h5>
      </div>
      <div className="user-profile__info-item">
        <h5 className="user-profile__info-title">Location:</h5>
        <h5 className="user-profile__info-value">{data?.location?.locationIsSet ? `${data?.location?.town}, ${data?.location?.state} - ${data?.location?.country}` : 'N/A'}</h5>
      </div>
      <div className="user-profile__info-item">
        <h5 className="user-profile__info-title">Bio:</h5>
        <h6 className="user-profile__info-value">
          {data?.bio}
        </h6>
      </div>
      <ProductsTab id={id} />
    </div>
  );
}
