import React from 'react';
import ReactDOM from 'react-dom/client';

/*
* - Headers
    - logo
    - navItems
* - Body
    - card
    - restaurants name
* - Footer
*
*/
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
  return (
    <div className='res-card'>
      <img className='by-kilo' alt='biryani image' src={props.resImg}></img>
      <div>
        <h3>{props.resName}</h3>
        <h4>{props.resCuisine}</h4>
        <h4>{props.resRating}</h4>
        <h4>{props.resDelTime}</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div className='search'>Search Your restaurants</div>
      <div className='res-container'>
        <RestaurantCard
          resImg='https://content3.jdmagicbox.com/v2/comp/delhi/j3/011pxx11.xx11.200108020736.z3j3/catalogue/handi-biryani-junction-rohini-sector-9-delhi-restaurants-0gw6tc0tvg.jpg'
          resName='Biryani by Kilo'
          resCuisine='Biryani, North Indian'
          resRating='4.3 stars'
          resDelTime='38 minutes'
        />
        <RestaurantCard
          resImg='https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg'
          resName='KFC'
          resCuisine='Burger, Fast Food'
          resRating='4.2 stars'
          resDelTime='31 minutes'
        />
        <RestaurantCard
          resImg='https://media.istockphoto.com/id/1253099922/photo/assortment-of-fresh-fruits-and-vegetables-juices-in-rainbow-colors.jpg?s=612x612&w=0&k=20&c=lFC0lAcR0FoPegoMTuJxc3fEAISbJVwZ1VmWNHzVEX8='
          resName='Tasty Juice'
          resCuisine='Milk Shake, Juice'
          resRating='4.5 stars'
          resDelTime='27 minutes'
        />
        <RestaurantCard
          resImg='https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?semt=ais_hybrid'
          resName='Meghana Foods'
          resCuisine='Biryani'
          resRating='4.3 stars'
          resDelTime='23 minutes'
        />
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
