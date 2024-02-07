import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/contants";
import useLocalStorage from "use-local-storage";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API);
      const json = await data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfResturant(restaurants);
      setFilteredResturant(restaurants);
      console.log(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredResturant = listOfResturant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturant(filteredResturant);
  };

  const handleFilter = () => {
    const filteredList = listOfResturant.filter(
      (res) => res.info.avgRatingString >= 4
    );
    setListOfResturant(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h2>No Internet Connection, Please! check your internet connection</h2>
    );

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body" data-theme={isDark ? "dark" : "light"}>
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Filter Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
          <Link key={restaurant.info.id} to={`resturant/${restaurant.info.id}`}>
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
