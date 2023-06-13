/* eslint-disable react/prop-types */
import React from 'react';

export default function Header({ title }) {
  return (
    <div className="page__header">
      <h1>{title}</h1>
    </div>
  );
}
