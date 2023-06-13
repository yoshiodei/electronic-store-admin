import React from 'react';
import Header from '../components/Header';
// import PageTable from '../components/PageTable/PageTable';
// import userheaderArray from './components/headerArray';
import UsersPageTable from './components/UsersPageTable';

export default function UsersPage() {
  return (
    <div className="page">
      <Header title="Users" />
      <UsersPageTable />
    </div>
  );
}
