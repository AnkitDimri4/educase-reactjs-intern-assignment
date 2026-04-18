const commonStyle =
  "rounded-md w-full text-center h-[46px] mb-[10px] font-medium transition-colors";

const variantStyles = {
  primary: "bg-blue text-white cursor-pointer hover:bg-blue/90",
  secondary: "bg-purple text-primary cursor-pointer hover:bg-purple/80",
  grey: "bg-light-gray text-white cursor-pointer hover:bg-light-gray/90",
  disabled: "bg-light-gray text-white cursor-not-allowed",
};

export function Button({
  name,
  type = "button",
  category = "secondary",
  disabled = false,
  className = "",
}) {
  const variantStyle = disabled
    ? variantStyles.disabled
    : (variantStyles[category] ?? variantStyles.secondary);

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={`${commonStyle} ${variantStyle} ${className}`}
    >
      {name}
    </button>
  );
}
