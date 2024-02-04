import { ShimmerThumbnail, ShimmerTitle } from "react-shimmer-effects";
import useLocalStorage from "use-local-storage";

const Shimmer = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);
  return (
    <div className="shimmer-container" data-theme={isDark ? "dark" : "light"}>
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
