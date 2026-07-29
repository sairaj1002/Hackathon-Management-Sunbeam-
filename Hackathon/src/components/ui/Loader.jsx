const Loader = ({
  fullScreen = false,
  text = "Loading...",
  size = "md",
}) => {
  const sizes = {
    sm: "h-6 w-6 border-2",
    md: "h-10 w-10 border-4",
    lg: "h-14 w-14 border-4",
  };

  const spinner = (
    <div className="flex flex-col items-center gap-3">
      <div
        role="status"
        aria-label="Loading"
        className={`
          animate-spin
          rounded-full
          border-blue-600
          border-t-transparent
          ${sizes[size] || sizes.md}
        `}
      />

      {text && (
        <p
          className="
            text-sm
            text-gray-600
            dark:text-gray-300
          "
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="
          fixed
          inset-0
          z-50
          flex
          items-center
          justify-center
          bg-white/90
          backdrop-blur-sm

          dark:bg-gray-900/90
        "
      >
        {spinner}
      </div>
    );
  }

  return (
    <div
      className="
        flex
        items-center
        justify-center
        py-10
      "
    >
      {spinner}
    </div>
  );
};

export default Loader;