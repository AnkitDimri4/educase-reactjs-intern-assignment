const headingStyle = "text-[28px] font-bold text-primary font-medium";

export function Heading({ content, className = "" }) {
  return <h1 className={`${headingStyle} ${className}`}>{content}</h1>;
}
