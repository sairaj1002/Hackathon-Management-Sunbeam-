import { ChevronRight } from "lucide-react";

const ActionCard = ({
  title,
  description,
  icon: Icon,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        rounded-xl
        border
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        dark:border-gray-700
        dark:bg-gray-800

        ${
          disabled
            ? "cursor-not-allowed opacity-60"
            : "hover:-translate-y-1 hover:shadow-md"
        }
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-lg
              bg-blue-100
              text-blue-600
              dark:bg-blue-900/30
              dark:text-blue-400
            "
          >
            {Icon && <Icon size={26} />}
          </div>

          <div className="text-left">
            <h3 className="font-semibold text-zinc-900 dark:text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {description}
            </p>
          </div>
        </div>

        <ChevronRight
          size={20}
          className="text-zinc-400"
        />
      </div>
    </button>
  );
};

export default ActionCard;