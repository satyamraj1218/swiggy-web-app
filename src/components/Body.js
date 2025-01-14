import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { Shimmer } from './Shimmer';
import { SWIGGY_WEB_API } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

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

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div>
        <h1>You are offline right now.. Try back later</h1>
      </div>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body'>
      <div className='flex px-4 py-2 m-4'>
        <div className='outline-cyan-800'>
          <input
            type='text'
            className='bg-gray-100 rounded-sm border-black'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className='bg-green-200 rounded-lg px-4 py-2 ml-4'
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
          className='ml-24 px-4 py-2 rounded-lg bg-green-200'
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
      <div className='flex flex-wrap'>
        {listOfRestaurants?.map((restaurant) => (
          <Link to={'/restaurants/' + restaurant?.info?.id}>
            <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
