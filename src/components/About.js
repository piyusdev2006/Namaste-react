import react from 'react';
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react'; 
import UserContext from '../utils/UserContext';

class About extends Component {
  // if this class component needs to hold state or use lifecycle methods
  constructor(props) {
    super(props);
    // Initialize state or bind methods here

    // console.log("Parent constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount.");
  }

  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us Page using class component</h1>
        <div>
          LooggedIn User: 
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Piyush Singh (Class component)"}
          location={"Lucknow"}
          github={"piyusdev2006"}
        />
      </div>
    );
  }
}

export default About;
