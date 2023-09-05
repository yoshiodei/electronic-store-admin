import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import UserImagePanel from './UserImagePanel';
import UserInfoPanel from './UserInfoPanel';
import { db } from '../../../config/firebaseConfig';

export default function UsersPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'vendors', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        setData(userData);
        console.log('Document data id -->', userData);
        console.log('set data -->', data);
      } else {
      // docSnap.data() will be undefined in this case
        console.log('No such document!');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row g-3 user-profile mt-0">
      <div className="col-4 mt-0">
        <UserImagePanel data={data} />
      </div>
      <div className="col-8 mt-0">
        <UserInfoPanel data={data} id={id} />
      </div>
    </div>
  );
}
