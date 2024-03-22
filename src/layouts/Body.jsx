import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RES_API } from "../utils/contants";
import ResturantCard, { topRated } from "./ResturantCard";
import Shimmer from "../components/Shimmer/Shimmer";
import useOnlineStatus from "../hooks/useOnlineStatus";
import "../styles/Body.scss";
import NoInternet from "../components/NoInternet/NoInternet";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  // console.log(listOfResturant);

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
      // console.log(json?.data?.data?.cards);
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

  const options = [
    {
      value: "veg",
      label: "Pure Veg",
    },
    {
      value: "nonveg",
      label: "Non Veg",
    },
    {
      value: "ratings45",
      label: "Rating 4.5+",
    },
    {
      value: "ratings35",
      label: "Ratings 3.5+",
    },
    {
      value: "delivery",
      label: "Fast delivery",
    },
  ];
  const handleFilter = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    let filteredList;

    switch (value) {
      case "veg":
        filteredList = listOfResturant.filter(
          (res) =>
            res.info && (res.info.veg === true || res.info.veg === undefined),
        );
        break;
      case "nonveg":
        filteredList = listOfResturant.filter(
          (res) =>
            res.info &&
            (res.info.nonveg === true || res.info.nonveg === undefined),
        );
        break;
      case "ratings45":
        filteredList = listOfResturant.filter(
          (res) => res.info && parseFloat(res.info.avgRatingString) >= 4.5,
        );
        break;
      case "ratings35":
        filteredList = listOfResturant.filter(
          (res) =>
            res.info &&
            parseFloat(res.info.avgRatingString) >= 3.5 &&
            parseFloat(res.info.avgRatingString) < 4.2,
        );
        break;
      case "delivery":
        filteredList = listOfResturant.filter(
          (res) => res.info.sla.lastMileTravel <= 2,
        );
        break;
      default:
        filteredList = listOfResturant;
        break;
    }

    setFilteredResturant(filteredList);
    console.log(filteredResturant);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <NoInternet />;

  return (
    <div className="body min-h-[calc(100svh-67px)]">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Enter restaurant name"
            onChange={(e) => setSearchText(e.target.value)}
          />
          {/* <button onClick={handleSearch}>Search</button> */}
        </div>
        {/* <button className="filter-btn" onClick={handleFilter}>
          Filter Restaurant
        </button> */}
        <select
          className="filter-btn"
          value={selectedOption}
          onChange={handleFilter}
        >
          <option value="">Select an option</option>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
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
