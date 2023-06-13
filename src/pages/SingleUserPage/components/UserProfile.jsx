import React from 'react';
import UserImagePanel from './UserImagePanel';
import UserInfoPanel from './UserInfoPanel';

export default function UsersPage() {
  return (
    <div className="row g-3 user-profile mt-0">
      <div className="col-4 mt-0">
        <UserImagePanel />
      </div>
      <div className="col-8 mt-0">
        <UserInfoPanel />
      </div>
    </div>
  );
}
