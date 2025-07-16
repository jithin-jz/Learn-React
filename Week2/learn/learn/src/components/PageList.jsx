import React, { useState } from 'react';
import items from '../data/items';
import Pagination from './Pagination';

const PaginatedList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Paginated Items</h2>
      <ul className="space-y-2">
        {paginatedItems.map((item, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded">
            {item}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default PaginatedList;
