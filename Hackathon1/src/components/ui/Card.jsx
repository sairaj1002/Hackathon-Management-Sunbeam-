const Card = ({
  title,
  children,
  footer,
  className = "",
}) => {
  return (
    <div
      className={`
        rounded-xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-shadow
        duration-200
        hover:shadow-md

        dark:border-gray-700
        dark:bg-gray-900

        ${className}
      `}
    >
      {/* Header */}

      {title && (
        <div
          className="
            border-b
            border-gray-200
            px-6
            py-4

            dark:border-gray-700
          "
        >
          <h2
            className="
              text-lg
              font-semibold
              text-gray-900

              dark:text-white
            "
          >
            {title}
          </h2>
        </div>
      )}

      {/* Body */}

      <div
        className="
          p-6
          text-gray-700

          dark:text-gray-300
        "
      >
        {children}
      </div>

      {/* Footer */}

      {footer && (
        <div
          className="
            border-t
            border-gray-200
            bg-gray-50
            px-6
            py-4

            dark:border-gray-700
            dark:bg-gray-800
          "
        >
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;