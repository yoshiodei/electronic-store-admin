/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ListItem({ title, icon, path }) {
  return (
    <li className="sidebar__button-list-item">
      <NavLink
        to={path}
        className="sidebar__button-list-item-link"
      >
        <div className="sidebar__button-list-item-div">
          <div className="sidebar__button-list-item-icon-div">
            <i className={`sidebar__button-list-item-icon ${icon}`} />
          </div>
          <h4 className="sidebar__button-list-item-text mb-0">{title}</h4>
        </div>
      </NavLink>
    </li>
  );
}
