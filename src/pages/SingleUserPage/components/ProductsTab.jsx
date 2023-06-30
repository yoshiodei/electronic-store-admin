import React, { useEffect, useState } from 'react';
import {
  collection, query, where, getDocs,
} from 'firebase/firestore';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { db } from '../../../config/firebaseConfig';
import EmptyTab from './EmptyTab';

export default function ProductsTab({ id }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, 'products'), where('vendorId', '==', id));
        const querySnapshot = await getDocs(q);
        const allProducts = [];
        querySnapshot.forEach((doc) => {
          console.log('products data -->', doc.data());
          const item = { ...doc.data(), itemID: doc.id };
          allProducts.push(item);
        });

        console.log('all products !!', allProducts);
        setData(allProducts);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  console.log('final products data --', data);

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
            {(data.length > 0) && data.map((item) => (
              <div className="col-4 justify-content-center">
                <ProductCard item={item} />
              </div>
            ))}
            { (data.length === 0) && <EmptyTab /> }
          </div>
        </div>
        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
          <EmptyTab />
        </div>
      </div>
    </div>
  );
}
