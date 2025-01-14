import { useState } from 'react';
import { LOGO_IMG } from '../utils/constants';
import { Link } from 'react-router';
import useOnlineStatus from '../utils/useOnlineStatus';

const Headers = () => {
  const [btnName, setBtnName] = useState('Login');
  const onlineStatus = useOnlineStatus();

  return (
    <div className='flex justify-between bg-pink-300'>
      <div>
        <img className='w-32 m-4 rounded-lg' src={LOGO_IMG}></img>
      </div>
      <div className='flex items-center'>
        <ul className='flex m-4 p-4'>
          <li className='px-4 text-lg hover:underline'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-4 text-lg hover:underline'>
            <Link to='/about'>About Us</Link>
          </li>
          <li className='px-4 text-lg hover:underline'>
            <Link to='/contact'>Contact Us</Link>
          </li>
          <li className='px-4 text-lg hover:underline'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-4 text-lg hover:underline'>Cart</li>
          <div className='flex'>
            <li className='px-4 text-lg'>
              Online Status: {onlineStatus ? '✅' : '🔴'}
            </li>
            <button
              className='bg-green-200 px-4 text-lg rounded-lg'
              onClick={() => {
                btnName === 'Login'
                  ? setBtnName('Logout')
                  : setBtnName('Login');
              }}
            >
              {btnName}
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Headers;
