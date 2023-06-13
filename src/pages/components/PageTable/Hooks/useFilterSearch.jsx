import { useEffect, useState } from 'react';

export default function useFilterSearch(data, searchTerm, setCurrentPage) {
  const [filteredArray, setFilteredArray] = useState(data);

  useEffect(() => {
    const filtered = data.filter(
      (item) => (
        item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
                || item?.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
                || item?.vendor?.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
                || item?.status?.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    );

    setFilteredArray(filtered);
    setCurrentPage(1);
  }, [data, searchTerm]);

  return { filteredArray };
}
