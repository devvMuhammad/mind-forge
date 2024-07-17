export default function Seperator() {
  return (
    <div className="flex items-center my-8">
      <div className="flex-grow border-t border-gray-500" />
      <span className="mx-4 text-sm text-gray-500">OR</span>
      <div className="flex-grow border-t border-gray-500" />
    </div>
  );
}
