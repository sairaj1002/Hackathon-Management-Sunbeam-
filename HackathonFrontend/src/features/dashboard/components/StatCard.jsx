const variants = {
  primary:
    "bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-900",

  success:
    "bg-green-50 border-green-200 dark:bg-green-950/40 dark:border-green-900",

  warning:
    "bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-900",

  danger:
    "bg-red-50 border-red-200 dark:bg-red-950/40 dark:border-red-900",
};

const iconColors = {
  primary: "text-blue-600 dark:text-blue-400",
  success: "text-green-600 dark:text-green-400",
  warning: "text-amber-600 dark:text-amber-400",
  danger: "text-red-600 dark:text-red-400",
};

const StatCard = ({
  title,
  value,
  subtitle,
  trend,
  icon: Icon,
  variant = "primary",
}) => {
  return (
    <div
      className={`
        rounded-xl
        border
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:shadow-md
        ${variants[variant]}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">
            {value}
          </h2>

          {subtitle && (
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </p>
          )}

          {trend && (
            <p className="mt-2 text-sm font-medium text-green-600 dark:text-green-400">
              {trend}
            </p>
          )}
        </div>

        {Icon && (
          <div
            className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-lg
              bg-white/60
              dark:bg-zinc-900/30
              ${iconColors[variant]}
            `}
          >
            <Icon size={28} />
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;