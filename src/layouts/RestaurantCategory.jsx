/* eslint-disable react/prop-types */

import ItemList from "./ItemList";

const Icon = ({ open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        open ? "rotate-180" : ""
      } h-5 w-5 transition-transform svg-toggle`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const RestaurantCategory = ({ data, showItems, onClick }) => {
  return (
    <div>
      <div>
        <div
          className="flex justify-between mb-4 mt-4 cursor-pointer"
          onClick={onClick}
        >
          <span className="font-bold menu-title">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            <Icon open={showItems} />
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      <div className="border-b-8 mb-7"></div>
    </div>
  );
};

export default RestaurantCategory;
