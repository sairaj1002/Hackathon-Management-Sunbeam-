import { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({
  isOpen,
  title,
  children,
  footer,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          w-full
          max-w-lg
          rounded-xl
          bg-white
          dark:bg-gray-900
          shadow-2xl
          transition-all
          duration-200
        "
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-gray-200
            dark:border-gray-700
            px-6
            py-4
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

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-gray-100
              dark:hover:bg-gray-800
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}

        <div
          className="
            px-6
            py-5
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
              flex
              justify-end
              gap-3
              border-t
              border-gray-200
              bg-gray-50
              dark:border-gray-700
              dark:bg-gray-800
              px-6
              py-4
            "
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;