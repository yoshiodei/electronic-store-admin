import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../config/firebaseConfig';

export default function useFetch(collectionName) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const users = querySnapshot.docs.map((doc) => doc.data());
      setData(users);
      setFilteredData(users);
    };

    fetchData();
    console.log('data from hook', data);
  }, []);

  return { data, filteredData };
}
