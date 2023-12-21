import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { collection, getDocs } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { setProductReport } from '../../../redux/slice/ReportSlice';
import { db } from '../../../config/firebaseConfig';

export default function ProductReportsTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'vendors'));

        let reportsList = [];

        snapshot.forEach((doc) => {
          const items = doc.data();
          if (items.productReports && Array.isArray(items.productReports)) {
            reportsList = [...reportsList, ...items.productReports];
          }
        });

        setData(reportsList);
        setFilteredData(reportsList);
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter(
      item => (
        item?.reportType.toLowerCase().includes(searchTerm.trim().toLowerCase())
        || item?.reportedItemName?.toLowerCase().includes(searchTerm.trim().toLowerCase())
        || item?.reportedItemVendorName?.toLowerCase().includes(searchTerm.trim().toLowerCase())
        || item?.reporterName.toLowerCase().includes(searchTerm.trim().toLowerCase())
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

  const handleNavigate = (object) => {
    dispatch(setProductReport(object));
    navigate('/product-report/details');
  };

  return (
    <div className="page__table">
      <div className="d-flex justify-content-between users__table-header">
        <h5 className="mb-0">{`Total reports - ${data.length}`}</h5>
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
            <th scope="col">Reported Product</th>
            <th scope="col">Product Vendor</th>
            <th scope="col">Report Type</th>
            <th scope="col">Reporter Name</th>
            <th scope="col">Report Date</th>
          </tr>
        </thead>
        <tbody>
          { currentItems.map((item, index) => (
            <tr
              role="button"
              key={item.userId}
              className="table__row"
              onClick={() => handleNavigate(item)}
            >
              <th scope="row">{index + 1 + ((currentPage - 1) * itemsPerPage)}</th>
              <td>{item?.reportedItemName}</td>
              <td>{item?.reportedItemVendorName}</td>
              <td>{item?.reportType}</td>
              <td>{item?.reporterName}</td>
              <td>{new Date(item?.reportDate).toDateString()}</td>
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
