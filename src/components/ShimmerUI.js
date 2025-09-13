const ShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 animate-pulse">
            {/* Image shimmer */}
            <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

            {/* Title shimmer */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

            {/* Text shimmer */}
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>

            {/* Button shimmer */}
            <div className="h-8 bg-gray-200 rounded-lg w-24"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
