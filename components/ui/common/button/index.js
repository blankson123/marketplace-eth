export default function Button({
  children,
  className = "text-white bg-indigo-600 hover:bg-indigo-700",
  ...rest
}) {
  return (
    <button
      {...rest}
      className={`px-8 py-3 border text-base font-medium rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
