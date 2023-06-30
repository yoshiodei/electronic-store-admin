import React from 'react';
import Header from '../components/Header';
import ProductProfile from './components/ProductProfile';

export default function SinglePendingProduct() {
  return (
    <div className="page">
      <Header title="Pending Single Product" />
      <ProductProfile />
    </div>
  );
}
