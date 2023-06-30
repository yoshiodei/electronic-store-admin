import React from 'react';
import { useSelector } from 'react-redux';
import ReporterDetailPanel from './ReporterDetailPanel';
import ReportedVendorDetail from './ReportedVendorDetail';
import { selectReportState } from '../../../redux/slice/ReportSlice';
// { useEffect, useState }
// import { doc, getDoc } from 'firebase/firestore';
// import { useParams } from 'react-router-dom';
// import { db } from '../../../config/firebaseConfig';

export default function ReportDetails() {
  const { productReport } = useSelector(selectReportState);
  console.log('am healing', productReport);

  return (
    <div className="row g-3 user-profile mt-0">
      <div className="col-4 mt-0">
        <ReporterDetailPanel reporterData={productReport} />
      </div>
      <div className="col-8 mt-0">
        <ReportedVendorDetail reportedProductData={productReport} />
      </div>
    </div>
  );
}
