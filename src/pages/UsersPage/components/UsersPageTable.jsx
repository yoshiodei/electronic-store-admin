import React, { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { db } from '../../../config/firebaseConfig';

export default function UsersPageTable() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'vendors'));
      const users = querySnapshot.docs.map((doc) => doc.data());

      setData(users);
      setFilteredData(users);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const filtered = data.filter(
      (vendor) => (
        vendor.displayName.toLowerCase().includes(searchTerm.toLowerCase())
        || vendor?.status.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    );

    setFilteredData(filtered);
    console.log('filteredData -->', filteredData);
    setCurrentPage(1);
    setIsLoading(false);
  }, [data, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  console.log('currentItems --->', currentItems);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!isLoading) {
    <div>loading ...</div>;
  }

  return (
    <div className="page__table">
      <div className="d-flex justify-content-between users__table-header">
        <h5 className="mb-0">{`Total vendors - ${data.length}`}</h5>
        <input
          type="text"
          className="form-control mb-3"
          value={searchTerm}
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
            <th scope="col">User Is Premium</th>
            <th scope="col">No. of Posts</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          { currentItems.map((item, index) => (
            <tr
              role="button"
              key={item.userId}
              className="table__row"
              onClick={() => {}}
            >
              <th scope="row">{index + 1 + ((currentPage - 1) * itemsPerPage)}</th>
              <td>{item?.displayName}</td>
              <td>{item?.rating}</td>
              <td>{item?.isPremium ? 'Yes' : 'No'}</td>
              <td>{item?.posts ? item?.posts : 'N/A'}</td>
              <td>{item?.status ? item?.status : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="...">Previous</a></li>
          {
            Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) })
              .map((_, index) => (
                <li className="page-item">
                  <button
                    type="button"
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>

                </li>
              ))
           }
          <li className="page-item"><a className="page-link" href="...">Next</a></li>
        </ul>
      </div>
    </div>
  );
}
