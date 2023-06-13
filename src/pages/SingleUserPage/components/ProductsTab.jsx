import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';

export default function ProductsTab() {
  return (
    <div>
      <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">All Items</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Sold Items</button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active products-tab__content" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
          <div className="row g-2">
            <div className="col-4 justify-content-center">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
            <div className="col-4">
              <ProductCard />
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">...</div>
        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">...</div>
        <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">...</div>
      </div>
    </div>
  );
}
