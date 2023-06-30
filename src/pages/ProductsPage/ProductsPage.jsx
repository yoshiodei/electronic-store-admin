import React from 'react';
import Header from '../components/Header';
import ProductsPageTable from './components/ProductsPageTable';

export default function ProductsPage() {
  return (
    <div className="page">
      <Header title="Products" />
      <ProductsPageTable />
    </div>
  );
}
