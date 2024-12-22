import React from 'react';
import ReactDOM from 'react-dom/client';
import resList from '../src/data/restaurantsList.json';

const Headers = () => {
  return (
    <div className='headers'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://img.freepik.com/free-vector/cute-male-courier-delivery-package-with-motorcycle-cartoon-vector-icon-illustration-people-job_138676-5708.jpg?t=st=1730689933~exp=1730693533~hmac=8c8c5d3324cfce00de7f6d5bf575eb7679bebd20e3cdf9a1d2cc1f88e4e1cdbe&w=740'
        ></img>
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    areaName,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className='res-card'>
      <img
        className='by-kilo'
        alt='image'
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/' +
          cloudinaryImageId
        }
      ></img>
      <div>
        <h3>{name + ', ' + areaName}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search Your restaurants</div>
      <div className='res-container'>
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className='app'>
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
