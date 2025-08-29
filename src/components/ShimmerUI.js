const ShimmerUI = () => {
  return (
    <div className="shimmer-wrapper">
      {Array(12)
        .fill(0)
        .map((_, i) => (
          <div className="shimmer-card" key={i}>
            <div className="shimmer-image"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-text"></div>
            <div className="shimmer-btn"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;
