import React from 'react';
import Header from '../components/Header';
import ProductProfile from './components/ProductProfile';

export default function SingleProductPage() {
  return (
    <div className="page">
      <Header title="Single Product" />
      <ProductProfile />
    </div>
  );
}
