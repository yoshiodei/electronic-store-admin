import React from 'react';

export default function PageTablePagination({ filteredArray, itemsPerPage }) {
  return (
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="...">Previous</a></li>
      {
      Array.from({ length: Math.ceil(filteredArray.length / itemsPerPage) }).map((_, index) => (
        <li className="page-item"><a className="page-link" href="...">{index + 1}</a></li>
      ))
      }
      <li className="page-item"><a className="page-link" href="...">Next</a></li>
    </ul>
  );
}
