const variants = {
  success: `
    bg-green-100
    text-green-700
    dark:bg-green-900/30
    dark:text-green-300
  `,

  warning: `
    bg-yellow-100
    text-yellow-700
    dark:bg-yellow-900/30
    dark:text-yellow-300
  `,

  danger: `
    bg-red-100
    text-red-700
    dark:bg-red-900/30
    dark:text-red-300
  `,

  info: `
    bg-blue-100
    text-blue-700
    dark:bg-blue-900/30
    dark:text-blue-300
  `,

  secondary: `
    bg-gray-100
    text-gray-700
    dark:bg-gray-800
    dark:text-gray-300
  `,
};

const Badge = ({
  children,
  variant = "secondary",
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        whitespace-nowrap
        ${variants[variant] || variants.secondary}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;