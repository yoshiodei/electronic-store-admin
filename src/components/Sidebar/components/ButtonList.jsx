import React from 'react';
import ListItem from './ListItem';

export default function ButtonList() {
  return (
    <ul className="sidebar__button-list">
      <ListItem
        title="Dashboard"
        icon="fa-solid fa-chart-line"
        path="/"
      />
      <ListItem
        title="Users"
        icon="fa-solid fa-user"
        path="/users"
      />
      <ListItem
        title="Products"
        icon="fa-solid fa-box"
        path="/products"
      />
      <ListItem
        title="Pending Items"
        icon="fa-solid fa-hourglass-start"
        path="/pending-items"
      />
      <ListItem
        title="Blocked Items"
        icon="fa-solid fa-ban"
        path="/blocked-items"
      />
      <ListItem
        title="Product Reports"
        icon="fa-solid fa-flag"
        path="/product-reports"
      />
      <ListItem
        title="User Reports"
        icon="fa-solid fa-flag"
        path="/user-reports"
      />
      <ListItem
        title="Promotions"
        icon="fa-solid fa-arrow-up-right-dots"
        path="/promotions"
      />
    </ul>
  );
}
