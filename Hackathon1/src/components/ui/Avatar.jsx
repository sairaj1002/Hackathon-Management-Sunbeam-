import { useState } from "react";

const Avatar = ({
  src,
  name = "",
  size = "md",
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);

  const sizes = {
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-14 w-14 text-lg",
    xl: "h-20 w-20 text-2xl",
  };

  const initials = name
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={name || "Avatar"}
        onError={() => setImageError(true)}
        className={`
          rounded-full
          object-cover
          ${sizes[size] || sizes.md}
          ${className}
        `}
      />
    );
  }

  return (
    <div
      className={`
        flex
        items-center
        justify-center
        rounded-full
        bg-blue-600
        font-semibold
        text-white
        select-none
        ${sizes[size] || sizes.md}
        ${className}
      `}
    >
      {initials || "?"}
    </div>
  );
};

export default Avatar;