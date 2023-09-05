import React from 'react';
import BlockedProductsTable from './components/BlockedProductsTable';
import Header from '../components/Header';

export default function BlockedItemsPage() {
  return (
    <div className="page">
      <Header title="Blocked Items" />
      <BlockedProductsTable />
    </div>
  );
}
