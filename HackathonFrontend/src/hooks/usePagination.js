import { useMemo } from "react";

const usePagination = (
  items = [],
  currentPage = 1,
  pageSize = 10
) => {
  return useMemo(() => {
    const totalItems = items.length;

    const totalPages = Math.max(
      1,
      Math.ceil(totalItems / pageSize)
    );

    const startIndex = (currentPage - 1) * pageSize;

    const endIndex = startIndex + pageSize;

    const paginatedItems = items.slice(startIndex, endIndex);

    return {
      paginatedItems,
      totalItems,
      totalPages,
      currentPage,
      pageSize,
      hasPreviousPage: currentPage > 1,
      hasNextPage: currentPage < totalPages,
    };
  }, [items, currentPage, pageSize]);
};

export default usePagination;