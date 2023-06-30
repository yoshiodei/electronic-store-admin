import React from 'react';
import profile from '../../../assets/images/profile.jpg';

export default function AdminInfo() {
  return (
    <div className="navbar__admin-info">
      <div className="navbar__admin-info__image-div">
        <img src={profile} alt="admin profile" />
      </div>
      <h5 className="navbar__admin-info__text mb-0">System Admin</h5>
    </div>
  );
}
