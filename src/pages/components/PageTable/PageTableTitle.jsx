import React from 'react';

export default function PageTableTitle({ collectionName, total, handleSearch }) {
  return (
    <div className="d-flex justify-content-between users__table-header">
      <h5 className="mb-0">{`Total ${collectionName} - ${total}`}</h5>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        onClick={handleSearch}
      />
    </div>
  );
}
