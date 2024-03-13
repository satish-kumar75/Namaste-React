import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import "./Shimmer.scss";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="shimmer-cards">
          <ShimmerThumbnail
            height={200}
            width={270}
            rounded
            className="shimmer-thumb"
          />
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
