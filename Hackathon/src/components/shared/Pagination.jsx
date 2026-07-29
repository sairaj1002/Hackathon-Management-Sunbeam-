const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div className="mt-6 flex items-center justify-center gap-2">
      {/* Previous */}

      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          rounded-md
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-700
          transition
          hover:bg-gray-100
          disabled:cursor-not-allowed
          disabled:opacity-50
          dark:border-gray-700
          dark:bg-gray-900
          dark:text-gray-200
          dark:hover:bg-gray-800
        "
      >
        Previous
      </button>

      {/* Page Numbers */}

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => handlePageChange(page)}
            className={`
              rounded-md
              border
              px-4
              py-2
              text-sm
              font-medium
              transition

              ${
                currentPage === page
                  ? "border-blue-600 bg-blue-600 text-white shadow"
                  : `
                      border-gray-300
                      bg-white
                      text-gray-700
                      hover:bg-gray-100
                      dark:border-gray-700
                      dark:bg-gray-900
                      dark:text-gray-200
                      dark:hover:bg-gray-800
                    `
              }
            `}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          rounded-md
          border
          border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-700
          transition
          hover:bg-gray-100
          disabled:cursor-not-allowed
          disabled:opacity-50
          dark:border-gray-700
          dark:bg-gray-900
          dark:text-gray-200
          dark:hover:bg-gray-800
        "
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;