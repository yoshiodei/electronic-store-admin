import React from 'react';
import Header from '../components/Header';
import UserProfile from './components/UserProfile';

export default function SingleUserPage() {
  return (
    <div className="page">
      <Header title="Single User" />
      <UserProfile />
    </div>
  );
}
