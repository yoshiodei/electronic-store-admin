import React, { useEffect, useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db } from '../../../config/firebaseConfig';

export default function ProductsPageTable() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const users = querySnapshot.docs.map((doc) => ({ ...doc.data(), itemID: doc.id }));

      setData(users);
      setFilteredData(users);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      (item) => (
        item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
        || item?.status?.toLowerCase().includes(searchTerm.trim().toLowerCase())
        || item.category?.toLowerCase().includes(searchTerm.trim().toLowerCase())
        || item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      ),
    );

    setFilteredData(filtered);
    console.log('filteredData -->', filteredData);
    setCurrentPage(1);
  }, [data, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  console.log('currentItems --->', currentItems);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="page__table">
      <div className="d-flex justify-content-between users__table-header">
        <h5 className="mb-0">{`Total items - ${data.length}`}</h5>
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
            <th scope="col">Price</th>
            <th scope="col">Brand</th>
            <th scope="col">Item Is Promoted</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          { currentItems.map((item, index) => (
            <tr
              role="button"
              key={item.userId}
              className="table__row"
              onClick={() => navigate(`/product/${item.itemID}`)}
            >
              <th scope="row">{index + 1 + ((currentPage - 1) * itemsPerPage)}</th>
              <td>{item?.name}</td>
              <td>{`$${item?.price}`}</td>
              <td>{item?.brand}</td>
              <td>{item?.isPomoted ? 'Yes' : 'No'}</td>
              <td>{item?.status ? item?.status : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <ul className="pagination">
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {
            Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) })
              .map((_, index) => (
                <li className="page-item">
                  <button
                    type="button"
                    className={currentPage === (index + 1) ? 'page-link active' : 'page-link'}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>

                </li>
              ))
           }
          <li className="page-item">
            <button
              className="page-link"
              type="button"
              disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)}
              onClick={() => paginate(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
