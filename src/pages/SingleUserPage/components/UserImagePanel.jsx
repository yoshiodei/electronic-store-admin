import React from 'react';

export default function UserImagePanel() {
  return (
    <div className="user-profile__image-panel">
      <div className="user-profile__image-div" alt="user" />
      <h4>Kwame Bini</h4>
      <div className="user-profile__image-panel__info-div">
        <div className="user-profile__image-panel__info-item">
          <h6>Followers</h6>
          <h4>128</h4>
        </div>
        <div className="user-profile__image-panel__info-item">
          <h6>Rating</h6>
          <h4>5.8</h4>
        </div>
        <div className="user-profile__image-panel__info-item">
          <h6>Posts</h6>
          <h4>128</h4>
        </div>
      </div>
      <button className="user-profile__suspend-button" type="button">Suspend User</button>
    </div>
  );
}
