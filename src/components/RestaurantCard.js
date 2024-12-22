import { CDN_URL } from '../utils/constants';

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
        src={CDN_URL + cloudinaryImageId}
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

export default RestaurantCard;
