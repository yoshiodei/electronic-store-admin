import React from 'react';
import Header from '../components/Header';
import ReportDetails from './components/ReportDetails';

export default function SingleProductReport() {
  return (
    <div className="page">
      <Header title="Single Product Report" />
      <ReportDetails />
    </div>
  );
}
