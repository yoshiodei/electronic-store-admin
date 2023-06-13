/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PageTableTitle from './PageTableTitle';
import PageTableHead from './PageTableHead';
import PageTableBody from './PageTableBody';
import PageTablePagination from './PageTablePagination';
import useFetch from './Hooks/useFetch';
import useFilterSearch from './Hooks/useFilterSearch';

export default function PageTable({ headerArray, collectionName }) {
  const { data } = useFetch(collectionName);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const handleSearch = (e) => setSearchTerm(e.target.value);

  const { filteredArray } = useFilterSearch(data, searchTerm, setCurrentPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredArray.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="page__table">
      <PageTableTitle
        collectionName={collectionName}
        total={data.length}
        handleSearch={handleSearch}
      />
      <table className="table table-hover">
        <PageTableHead headerArray={headerArray} />
        <PageTableBody currentItems={currentItems} />
      </table>
      <div className="d-flex justify-content-center">
        <PageTablePagination
          filteredArray={filteredArray}
          itemsPerPage={itemsPerPage}
        />
      </div>
    </div>
  );
}
