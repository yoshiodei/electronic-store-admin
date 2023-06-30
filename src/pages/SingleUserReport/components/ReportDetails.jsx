import React from 'react';
import { useSelector } from 'react-redux';
import ReporterDetailPanel from './ReporterDetailPanel';
import ReportedVendorDetail from './ReportedVendorDetail';
import { selectReportState } from '../../../redux/slice/ReportSlice';

export default function ReportDetails() {
  const { userReport } = useSelector(selectReportState);

  return (
    <div className="row g-3 user-profile mt-0">
      <div className="col-4 mt-0">
        <ReporterDetailPanel reporterData={userReport} />
      </div>
      <div className="col-8 mt-0">
        <ReportedVendorDetail reportedVendorData={userReport} />
      </div>
    </div>
  );
}
