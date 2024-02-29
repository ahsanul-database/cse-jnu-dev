import { useState } from "react";

export const pagination = (allItems, totalData, ItemPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ItemPerPage, setItemPerPage] = useState(20);
  const indexOfLastItem = currentPage * ItemPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemPerPage;
  const pageCount = Math.ceil(totalData / ItemPerPage);
  const currentItems = allItems.slice(indexOfFirstItem, indexOfLastItem);
  const numbers = [...Array(pageCount + 1).keys()].slice(1);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage(currentPage + 1);
  };
  const paginate = (number) => {
    setCurrentPage(number);
  };
  return {
    currentPage,
    setCurrentPage,
    ItemPerPage,
    indexOfLastItem,
    indexOfFirstItem,
    pageCount,
    currentItems,
    numbers,
    prevPage,
    nextPage,
    paginate,
  };
};
