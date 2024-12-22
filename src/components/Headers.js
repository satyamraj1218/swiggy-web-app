import { LOGO_IMG } from '../utils/constants';

const Headers = () => {
  return (
    <div className='headers'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_IMG}></img>
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

export default Headers;
