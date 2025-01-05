import { useState } from 'react';

const User = (props) => {
  const { name, location } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className='user-card'>
      <h1>count : {count}</h1>
      <h1>Contact Us at:</h1>
      <h2>Name: {name}</h2>
      <h3>Email: satyamraj1218@gmail.com</h3>
      <h3>Mobile: 7355198507</h3>
      <h3>Location: {location} </h3>
    </div>
  );
};

export default User;
