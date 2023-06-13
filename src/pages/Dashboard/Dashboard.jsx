import React from 'react';
import InfoPanels from './components/InfoPanels';
import Header from '../components/Header';

export default function Dashboard() {
  return (
    <div className="page">
      <Header title="Dashboard" />
      <InfoPanels />
    </div>

  );
}
