import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReportedVendorDetail({ reportedProductData }) {
  const navigate = useNavigate();
  const {
    reportDetail, reportType, reportedItemId, reportedItemName, reportedItemVendorName,
  } = reportedProductData;

  return (
    <div className="report-page__reported-vendor-panel">
      <h5 className="report-page__panel-tile">Reported Vendor Details</h5>
      <div className="mt-4">
        <div className="user-profile__info-item">
          <h5 className="user-profile__info-title">Item Name:</h5>
          <h5 className="user-profile__info-value">{ reportedItemName }</h5>
        </div>
        <div className="user-profile__info-item">
          <h5 className="user-profile__info-title">Report Type:</h5>
          <h5 className="user-profile__info-value">{ reportType }</h5>
        </div>
        <div className="user-profile__info-item">
          <h5 className="user-profile__info-title">Report Detail:</h5>
          <h5 className="user-profile__info-value">{ reportDetail }</h5>
        </div>
        <div className="user-profile__info-item">
          <h5 className="user-profile__info-title">Vendor Name:</h5>
          <h5 className="user-profile__info-value">{ reportedItemVendorName }</h5>
        </div>
      </div>
      <div className="mt-5 report-page__reported-vendor-panel__buttons-div">
        <button
          className="report-page__reported-vendor-panel__view-item-button"
          type="button"
          onClick={() => {
            navigate(`/product/${reportedItemId}`);
          }}
        >
          View Reported Item

        </button>
        <button type="button" className="report-page__reported-vendor-panel__block-item-button">Block Reported Item</button>
      </div>
    </div>
  );
}
