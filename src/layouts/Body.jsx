import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/contants";
import ResturantCard, { topRated } from "./ResturantCard";
import Shimmer from "../components/Shimmer/Shimmer";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useLocalStorage from "use-local-storage";
import "../styles/Body.scss";
import NoInternet from "../components/NoInternet/NoInternet";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isDark] = useLocalStorage("isDark");

  const TopRatedResturant = topRated(ResturantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API);
      const json = await data.json();
      const restaurants =
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfResturant(restaurants);
      setFilteredResturant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // const handleSearch = (e) => {
  //   setSearchText(e.target.value);

  //   if (e.target.value.length == "") {
  //     setFilteredResturant(listOfResturant);
  //   } else {
  //     const filteredResturant = listOfResturant.filter((res) =>
  //       res.info.name.toLowerCase().includes(e.target.value.toLowerCase())
  //     );
  //     setFilteredResturant(filteredResturant);
  //   }
  // };

  const handleFilter = () => {
    const filteredList = listOfResturant.filter(
      (res) => res.info.avgRatingString >= 4
    );
    setListOfResturant(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <NoInternet />;

  return (
    <div
      className="body min-h-[calc(100svh-67px)]"
      data-theme={isDark ? "dark" : "light"}
    >
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            // value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* <button onClick={handleSearch}>Search</button> */}
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Filter Restaurant
        </button>
      </div>
      {listOfResturant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {filteredResturant
            .filter((item) => {
              return searchText.toLowerCase() === ""
                ? item
                : item.info.name.toLowerCase().includes(searchText);
            })
            .map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={`resturant/${restaurant.info.id}`}
              >
                {restaurant.info.avgRatingString >= 4 ? (
                  <TopRatedResturant resData={restaurant} />
                ) : (
                  <ResturantCard resData={restaurant} />
                )}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Body;
