import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfResturant(restaurants);
      setFilteredResturant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredResturant = ListOfResturant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturant(filteredResturant);
  };

  const handleFilter = () => {
    const filteredList = ListOfResturant.filter(
      (res) => res.info.avgRatingString >= 4
    );
    setListOfResturant(filteredList);
  };

  return ListOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Filter
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <Link key={resturant.info.id} to={"resturant/" + resturant.info.id}>
            <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
