import { useState } from 'react';
import { LOGO_IMG } from '../utils/constants';

const Headers = () => {
  const [btnName, setBtnName] = useState('Login');
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
          <button
            className='login'
            onClick={() => {
              btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
