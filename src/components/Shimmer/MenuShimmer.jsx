import "./MenuShimmer.scss";

const MenuShimmer = () => {
  return (
    <div className="main-menu-container min-h-[calc(100svh-67px)]">
      <div className="menu-container">
        <div className="res-detail">
          <div className="restaurant-name flex gap-5">
            <div className="h-[120px] w-[120px]"> </div>
            <div className="mt-5 flex flex-col gap-3">
              <h1 className="h-4 rounded-lg w-36"></h1>
              <p className="h-2 rounded-lg w-52"></p>
              <span className="h-2 rounded-lg w-52"></span>
              <span className="h-2 rounded-lg w-52"></span>
            </div>
          </div>
          <div className="restaurant-rating h-20 w-20 rounded-lg"></div>
        </div>
        <div className="restaurant-costs flex gap-3">
          <p className="h-3 rounded-lg w-12"></p>
          <p className="h-3 rounded-lg w-12"></p>
        </div>
        <div className="restaurant-category h-4 rounded-lg w-52 mt-6"></div>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="category-details flex justify-between pb-8 mb-4"
          >
            <div className="cat-det flex flex-col gap-4 mt-6">
              <h1 className="h-4 rounded-lg w-96"></h1>
              <p className="h-2 rounded-lg w-[550px]"></p>
              <p className="h-2 rounded-lg w-[550px]"></p>
              <p className="h-2 rounded-lg w-[550px]"></p>
            </div>
            <div className="dish-img w-28 h-28 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuShimmer;
