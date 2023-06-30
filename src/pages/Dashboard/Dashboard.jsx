import React from 'react';
import InfoPanels from './components/InfoPanels';
import Header from '../components/Header';
import DisplayGraphs from './components/DisplayGraphs';

export default function Dashboard() {
  return (
    <div className="page">
      <Header title="Dashboard" />
      <InfoPanels />
      <DisplayGraphs />
    </div>

  );
}
