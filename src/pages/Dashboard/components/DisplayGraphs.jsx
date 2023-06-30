import React from 'react';
import DoughNutChart from './DoughNutChart';
import LineChart from './LineChart';

export default function DisplayGraphs() {
  return (
    <div className="dashboard__display-graphs row g2">
      <div className="col-8">
        <div className="dashboard__bar-graph-panel">
          <LineChart />
        </div>
      </div>
      <div className="col-4">
        <div className="dashboard__doughnut-graph-panel">
          <DoughNutChart />
        </div>
      </div>
    </div>
  );
}
