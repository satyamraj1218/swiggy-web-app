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
    <div className='w-[260px] h-[415px] m-2 p-2 bg-gray-100 border-black rounded-lg hover:bg-gray-200'>
      <div className='h-[210px]'>
        <img
          className='w-[100%] h-[100%] rounded-lg'
          alt='image'
          src={CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className='mt-1 pl-1'>
        <h3 className='font-bold'>{name}</h3>
        <h4 className='font-bold'>
          ✳️ {avgRating} | {sla.slaString}
        </h4>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{costForTwo}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
