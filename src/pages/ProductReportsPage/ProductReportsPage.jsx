import React from 'react';
import Header from '../components/Header';
import ProductReportsTable from './components/ProductReportsTable';

export default function ProductReportsPage() {
  return (
    <div className="page">
      <Header title="Product Reports" />
      <ProductReportsTable />
    </div>
  );
}
