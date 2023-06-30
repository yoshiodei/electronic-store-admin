import React from 'react';
import Header from '../components/Header';
import PendingProductsTable from './components/PendingProductsTable';

export default function PendingItemsPage() {
  return (
    <div className="page">
      <Header title="Pending Items" />
      <PendingProductsTable />
    </div>
  );
}
