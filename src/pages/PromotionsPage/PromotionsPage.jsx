import React from 'react';
import Header from '../components/Header';

export default function PromotionsPage() {
  return (
    <div className="page">
      <Header title="Promotions" />
      <div className="promotion__empty-div">
        <h1>Items are yet to be Promoted</h1>
      </div>
    </div>
  );
}
