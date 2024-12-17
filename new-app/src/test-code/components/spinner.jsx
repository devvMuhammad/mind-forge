// .loading-xs {
//   @apply w-4;
// }
// .loading-sm {
//   @apply w-5;
// }
// .loading-md {
//   @apply w-6;
// }
// .loading-lg {
//   @apply w-10;
// }

export default function Spinner({ size, className, ...props }) {
  const sizes = {
    xs: "w-4",
    sm: "w-5",
    md: "w-6",
    lg: "w-10",
  };
  return (
    <div
      {...props}
      className={`loading bg-black ${(sizes[size] || size, className)}`}
    ></div>
  );
}
