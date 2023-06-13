import React from 'react';
import Header from '../components/Header';
import PageTable from '../components/PageTable/PageTable';
import productsHeaderArray from './components/headerArray';

export default function ProductsPage() {
  return (
    <div className="page">
      <Header title="Products" />
      <PageTable
        headerArray={productsHeaderArray}
        collectionName="products"
      />
    </div>
  );
}
