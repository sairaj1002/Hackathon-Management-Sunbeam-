const Table = ({
  columns = [],
  data = [],
  loading = false,
  rowKey = "id",
}) => {
  return (
    <div
      className="
        overflow-x-auto
        rounded-lg
        border
        border-gray-200
        bg-white
        shadow-sm
        dark:border-gray-700
        dark:bg-gray-900
      "
    >
      <table className="min-w-full">
        {/* Header */}

        <thead
          className="
            bg-gray-100
            dark:bg-gray-800
          "
        >
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="
                  px-5
                  py-3
                  text-left
                  text-sm
                  font-semibold
                  text-gray-700
                  dark:text-gray-200
                "
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}

        <tbody>
          {/* Loading */}

          {loading ? (
            <tr>
              <td
                colSpan={columns.length}
                className="
                  py-10
                  text-center
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Loading...
              </td>
            </tr>
          ) : data.length > 0 ? (
            data.map((row, index) => (
              <tr
                key={row[rowKey] ?? index}
                className="
                  border-t
                  border-gray-200
                  transition-colors
                  hover:bg-gray-50
                  dark:border-gray-700
                  dark:hover:bg-gray-800
                "
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="
                      px-5
                      py-4
                      text-sm
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    {column.render
                      ? column.render(row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="
                  py-10
                  text-center
                  text-gray-500
                  dark:text-gray-400
                "
              >
                📂 No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;