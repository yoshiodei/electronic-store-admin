import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../../assets/images/profile.jpg';

export default function ReporterDetailPanel({ reporterData }) {
  const navigate = useNavigate();

  return (
    <div className="report-page__reporter-panel">
      <h5 className="report-page__panel-tile">Reporter Details</h5>
      <div className="report-page__reporter-info-div">
        <div className="report-page__reporter-image-div">
          <img
            src={reporterData.reporterImage || profile}
            alt="reporter"
          />
        </div>
        <h5 className="m-0">{reporterData.reporterName}</h5>
      </div>
      <div className="d-flex g-5">
        <h5 className="m-0 me-3">Report Date:</h5>
        <h5>{new Date(reporterData.reportDate).toDateString()}</h5>
      </div>
      <button
        className="report-page__view-reporter-button mt-4"
        type="button"
        onClick={() => navigate(`/user/${reporterData.reporterId}`)}
      >
        View Reporter Profile

      </button>
    </div>
  );
}
