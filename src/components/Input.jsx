const baseInputStyle =
  "w-full h-[40px] px-[15px] bg-transparent focus:outline-none text-[13px]";

export function Input({
  label,
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  onChange,
  value,
}) {
  const inputId = id || name || label.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="relative mt-6">
      <div className="group relative rounded-md border border-light-gray focus-within:border-[#6C25FF] bg-[#f7f8f9] transition-all">
        <label
          htmlFor={inputId}
          className="text-blue text-[13px] absolute -top-2.5 left-3 bg-body px-1 font-small"
        >
          {label}
          {required && <span className="text-warning">*</span>}
        </label>

        <input
          id={inputId}
          name={name || inputId}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={baseInputStyle}
        />
      </div>
    </div>
  );
}