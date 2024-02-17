import { ShimmerContentBlock } from "react-shimmer-effects";
import "./MenuShimmer.scss";
import useLocalStorage from "use-local-storage";

const MenuShimmer = () => {
  const [isDark] = useLocalStorage("isDark");

  return (
    <div className="shimmer-container" data-theme={isDark ? "dark" : "light"}>
      <div className="w-[500px] shimmer-cards">
        <ShimmerContentBlock
          title
          text
          thumbnailWidth={120}
          thumbnailHeight={120}
          className=""
        />
      </div>
    </div>
  );
};

export default MenuShimmer;
