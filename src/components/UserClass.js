import React from 'react';
import { GIT_USER_API } from '../utils/constants';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: 'dummyName',
        email: 'dummyEmail@testEmail.com',
        id: 'dummyId',
        location: 'Bangalore',
      },
    };
  }

  async componentDidMount() {
    console.log('Child component did mount');
    const data = await fetch(GIT_USER_API);
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { name, location, twitter_username, avatar_url } =
      this.state.userInfo;
    return (
      <div className='user-card'>
        <div>
          <h1>Contact Us at:</h1>
          <h2>Name: {name}</h2>
          <h3>Email: satyamraj1218@gmail.com</h3>
          <h3>Mobile: 7355198507</h3>
          <h3>Location: {location}</h3>
          <h3>Twitter: {'x.com/' + twitter_username}</h3>
        </div>
        <div>
          <img className='git-pic' src={avatar_url} alt='Satyam dp' />
        </div>
      </div>
    );
  }
}

export default UserClass;
