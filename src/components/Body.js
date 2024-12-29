import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Shimmer } from './Shimmer';
import { SWIGGY_WEB_API } from '../utils/constants';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchedRestaurants, setSearchedRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_WEB_API);
    const result = await data.json();
    setListOfRestaurants(
      result?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchedRestaurants(
      result?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className='search-btn'
            onClick={() => {
              const filteredRestaurants = searchedRestaurants.filter(
                (restaurant) =>
                  restaurant?.info?.name
                    ?.toLowerCase()
                    ?.includes(searchText.toLowerCase())
              );
              setListOfRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            const filteredList = searchedRestaurants.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className='res-container'>
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
