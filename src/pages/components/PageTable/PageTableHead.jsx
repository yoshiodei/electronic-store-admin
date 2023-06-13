/* eslint-disable react/prop-types */
import React from 'react';

export default function PageTableHead({ headerArray }) {
  return (
    <thead>
      <tr>
        {headerArray.map((item) => (
          <th scope="col">{item}</th>
        ))}
      </tr>
    </thead>
  );
}
