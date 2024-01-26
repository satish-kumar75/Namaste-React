import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="shimmer-cards">
          <ShimmerThumbnail height={200} width={270} rounded />
          <ShimmerTitle
            line={3}
            gap={10}
            variant="secondary"
            className="shimmer-title"
          />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
