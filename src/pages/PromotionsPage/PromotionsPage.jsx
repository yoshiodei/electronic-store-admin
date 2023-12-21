import React, { useEffect, useState } from 'react';
import {
  collection, getDocs, query, where,
} from '@firebase/firestore';
import Header from '../components/Header';
import { db } from '../../config/firebaseConfig';

export default function PromotionsPage() {
  const [promoData, setPromoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('isPromoted', '==', false),
        );
        const querySnapshot = await getDocs(q);
        const promotedItems = querySnapshot.docs.map((doc) => ({ ...doc.data(), itemID: doc.id }));

        setPromoData(promotedItems);
      } catch (error) {
        console.error('Error fetching promoted items:', error.message);
      }
    };

    fetchData();
  }, []);

  console.log(promoData);

  return (
    <div className="page">
      <Header title="Promotions" />
      <div className="promotion__table">
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Vendor</th>
              <th>Item Name</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {promoData.map((item) => (
              <tr key={item.itemID}>
                <td>{item.brand || ''}</td>
                <td>{item.vendor?.name || ''}</td>
                <td>{item.item_name || ''}</td>
                <td>{item.category || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
