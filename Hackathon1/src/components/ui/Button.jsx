const variants = {
  primary: `
    bg-blue-600
    text-white
    hover:bg-blue-700
    focus:ring-blue-500
  `,

  secondary: `
    bg-gray-200
    text-gray-800
    hover:bg-gray-300
    dark:bg-gray-700
    dark:text-white
    dark:hover:bg-gray-600
    focus:ring-gray-500
  `,

  success: `
    bg-green-600
    text-white
    hover:bg-green-700
    focus:ring-green-500
  `,

  danger: `
    bg-red-600
    text-white
    hover:bg-red-700
    focus:ring-red-500
  `,

  outline: `
    border
    border-blue-600
    bg-transparent
    text-blue-600
    hover:bg-blue-50
    dark:border-blue-400
    dark:text-blue-400
    dark:hover:bg-blue-900/20
    focus:ring-blue-500
  `,

  ghost: `
    bg-transparent
    text-gray-700
    hover:bg-gray-100
    dark:text-gray-200
    dark:hover:bg-gray-800
    focus:ring-gray-500
  `,
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
};

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        font-medium
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        disabled:cursor-not-allowed
        disabled:opacity-50

        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${className}
      `}
      {...props}
    >
      {loading && (
        <span
          className="
            h-4
            w-4
            animate-spin
            rounded-full
            border-2
            border-current
            border-t-transparent
          "
        />
      )}

      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;