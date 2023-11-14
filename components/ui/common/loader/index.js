const SIZES = {
  sm: "w-6 h-6",
  md: "w-8 h-8",
  lg: "w-12 h-12",
};

export default function Loader({ size = "sm" }) {
  console.log(SIZES["md"]);
  const renderedItems = Array.from({ length: 12 }).map((_, i) => {
    return <div key={`dot-${i}`} className={`sk-circle${i} sk-circle`}></div>;
  });
  return (
    <>
      <div className={`sk-fading-circle ${SIZES[size]}`}>{renderedItems}</div>
    </>
  );
}
