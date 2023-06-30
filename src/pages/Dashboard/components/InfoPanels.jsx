import React from 'react';

export default function InfoPanels() {
  return (
    <div className="dashboard__info-panels">
      <div className="dashboard__panel">
        <div className="dashboard__panel__icon-div">
          <i className="fa-solid fa-user" />
        </div>
        <div className="dashboard__panel__info-div">
          <h6 className="mb-0">Total Users</h6>
          <h3 className="mb-0">4,502</h3>
        </div>
      </div>
      <div className="dashboard__panel">
        <div className="dashboard__panel__icon-div">
          <i className="fa-solid fa-box" />
        </div>
        <div className="dashboard__panel__info-div">
          <h6 className="mb-0">Total Posts</h6>
          <h3 className="mb-0">18,276</h3>
        </div>
      </div>
      <div className="dashboard__panel">
        <div className="dashboard__panel__icon-div">
          <i className="fa-solid fa-hourglass-start" />
        </div>
        <div className="dashboard__panel__info-div">
          <h6 className="mb-0">Total Pending Posts</h6>
          <h3 className="mb-0">245</h3>
        </div>
      </div>
      <div className="dashboard__panel">
        <div className="dashboard__panel__icon-div">
          <i className="fa-solid fa-gauge-simple" />
        </div>
        <div className="dashboard__panel__info-div">
          <h6 className="mb-0">Average Post/User</h6>
          <h3 className="mb-0">27</h3>
        </div>
      </div>
    </div>
  );
}
