import useResMenu from '../utils/useResMenu';
import { Shimmer } from './Shimmer';
import { useParams } from 'react-router';

const ResMenu = () => {
  const { resId } = useParams(); //params.resId ~ destructuring it
  const resMenu = useResMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const {
    name,
    costForTwoMessage,
    avgRating,
    cuisines,
    sla,
    cloudinaryImageId,
  } = resMenu?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  return (
    <div className='menu'>
      <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(', ')}</h3>
        <h3>
          {costForTwoMessage} {avgRating}
        </h3>
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((item) => (
            <li key={item?.card?.info?.id}>
              <p>
                {item?.card?.info?.name} {': Rs. '}
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
            </li>
          ))}{' '}
        </ul>
      </div>
    </div>
  );
};

export default ResMenu;
