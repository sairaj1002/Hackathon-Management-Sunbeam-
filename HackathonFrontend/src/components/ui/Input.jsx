const Input = ({
  id,
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className = "",
  required = false,
  ...props
}) => {
  return (
    <div className="space-y-2">
      {/* Label */}

      {label && (
        <label
          htmlFor={id}
          className="
            block
            text-sm
            font-medium
            text-gray-700
            dark:text-gray-300
          "
        >
          {label}

          {required && (
            <span className="ml-1 text-red-500">
              *
            </span>
          )}
        </label>
      )}

      {/* Input */}

      <div className="relative">
        {leftIcon && (
          <div
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-gray-400
              dark:text-gray-500
            "
          >
            {leftIcon}
          </div>
        )}

        <input
          id={id}
          className={`
            w-full
            rounded-lg
            border
            bg-white
            px-3
            py-2
            text-sm
            text-gray-900
            outline-none
            transition-all
            duration-200

            placeholder:text-gray-400

            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/20

            dark:border-gray-700
            dark:bg-gray-900
            dark:text-white
            dark:placeholder:text-gray-500

            ${
              leftIcon
                ? "pl-10"
                : ""
            }

            ${
              rightIcon
                ? "pr-10"
                : ""
            }

            ${
              error
                ? `
                    border-red-500
                    focus:border-red-500
                    focus:ring-red-500/20
                  `
                : `
                    border-gray-300
                  `
            }

            ${className}
          `}
          {...props}
        />

        {rightIcon && (
          <div
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-gray-400
              dark:text-gray-500
            "
          >
            {rightIcon}
          </div>
        )}
      </div>

      {/* Helper */}

      {!error && helperText && (
        <p
          className="
            text-xs
            text-gray-500
            dark:text-gray-400
          "
        >
          {helperText}
        </p>
      )}

      {/* Error */}

      {error && (
        <p
          className="
            text-xs
            text-red-500
          "
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;