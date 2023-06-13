import React from 'react';

export default function PageTableBody({ currentItems }) {
  return (
    <tbody>
      { currentItems.map((item, index) => (
        <tr
          role="button"
          className="table__row"
          onClick={() => {}}
        >
          <th scope="row">{index + index}</th>
          <td>{item?.userId}</td>
          <td>{item?.displayName}</td>
          <td>{item?.posts}</td>
          <td>{item?.status}</td>
        </tr>
      ))}
    </tbody>
  );
}
