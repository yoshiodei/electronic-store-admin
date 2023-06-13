import React from 'react';
import Header from './components/Header';
import ButtonList from './components/ButtonList';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Header />
      <ButtonList />
    </div>
  );
}
