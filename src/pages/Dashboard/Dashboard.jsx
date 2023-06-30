import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import InfoPanels from './components/InfoPanels';
import Header from '../components/Header';
import DisplayGraphs from './components/DisplayGraphs';
import { db } from '../../config/firebaseConfig';

export default function Dashboard() {
  const initialCount = {
    vendorsCount: 0,
    productsCount: 0,
    pendingItemsCount: 0,
    averageCount: 0,
  };
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const fetchData = async () => {
      const vendorsSnap = await getDocs(collection(db, 'vendors'));
      const pendingItemsSnap = await getDocs(collection(db, 'pendingItems'));
      const productsSnap = await getDocs(collection(db, 'products'));
      const vendorsCount = vendorsSnap.size;
      const pendingItemsCount = pendingItemsSnap.size;
      const productsCount = productsSnap.size;
      setCount({
        vendorsCount,
        pendingItemsCount,
        productsCount,
        averageCount: (vendorsCount / productsCount),
      });
    };

    fetchData();
  }, []);

  return (
    <div className="page">
      <Header title="Dashboard" />
      <InfoPanels count={count} />
      <DisplayGraphs />
    </div>

  );
}
