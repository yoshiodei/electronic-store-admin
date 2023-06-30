import React from 'react';
import Header from '../components/Header';
import UserReportsTable from './compoents/UserReportsTable';

export default function UserReportsPage() {
  return (
    <div className="page">
      <Header title="User Reports" />
      <UserReportsTable />
    </div>
  );
}
